const { ActionRowBuilder, ButtonBuilder } = require('discord.js');
const quizData = require('./quiz-data.json');
const { userPointsMap, quizAttemptsMap, saveDataToFile } = require('../sharedData');

function calculatePoints(difficulty) {
  switch (difficulty) {
    case 'Easy':
      return 20;
    case 'Medium':
      return 50;
    case 'Hard':
      return 100;
    default:
      return 0;
  }
}

module.exports = {
  data: {
    name: 'quiz',
    description: 'Start a quiz',
    options: [
      {
        name: 'difficulty',
        description: 'Choose the difficulty of the quiz (Easy, Medium, Hard)',
        type: 3,
        required: false,
        choices: [
          { name: 'Easy', value: 'Easy' },
          { name: 'Medium', value: 'Medium' },
          { name: 'Hard', value: 'Hard' },
        ],
      },
    ],
  },
  async execute(interaction) {
    try {
      const userId = interaction.user.id;

      // Increment quiz attempts only once at the beginning
      let userAttempts = quizAttemptsMap.get(userId) || 0;
      quizAttemptsMap.set(userId, userAttempts + 1);

      const selectedDifficulty =
        interaction.options.getString('difficulty') ||
        ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)];

      const filteredQuestions = quizData.filter(
        (question) => question.difficulty === selectedDifficulty
      );
      if (filteredQuestions.length === 0) {
        interaction.reply(`No questions available for the selected difficulty: ${selectedDifficulty}`);
        return;
      }

      const randomQuestion =
        filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];

      const buttons = randomQuestion.options.map((option, index) =>
        new ButtonBuilder().setCustomId(index.toString()).setLabel(option).setStyle(1)
      );
      const row = new ActionRowBuilder().addComponents(buttons);

      console.log(`Quiz started by user ${interaction.user.id} with difficulty: ${selectedDifficulty}`);
      await interaction.reply({
        content: `**Question (${selectedDifficulty}):** ${randomQuestion.question}`,
        components: [row],
      });

      const collector = interaction.channel.createMessageComponentCollector({
        filter: (buttonInteraction) => buttonInteraction.user.id === interaction.user.id,
        time: 15000,
      });

      collector.on('collect', async (buttonInteraction) => {
        collector.stop(); // Stop the collector immediately when a button is clicked

        const selectedOption = randomQuestion.options[parseInt(buttonInteraction.customId)];

        if (selectedOption === randomQuestion.correctAnswer) {
          const points = calculatePoints(selectedDifficulty);
          console.log(`User ${interaction.user.id} answered correctly and earned ${points} points.`);

          try {
            await buttonInteraction.reply({
              content: `Correct! 🎉 You earned ${points} points!`,
              ephemeral: true,
            });

            // Update user points only if they answered correctly
            let userPointsValue = userPointsMap.get(userId) || 0;
            userPointsMap.set(userId, userPointsValue + points);

            // Save data to file after each quiz
            saveDataToFile();
          } catch (error) {
            console.error('Error replying to interaction:', error.message);
          }
        } else {
          const correctAnswer = randomQuestion.correctAnswer;
          await buttonInteraction.reply({
            content: `Incorrect answer. The correct answer was ${correctAnswer}.`,
            ephemeral: true,
          });
        }
      });

      collector.on('end', (collected, reason) => {
        if (reason === 'time') {
          console.log(`Quiz ended due to time for user ${interaction.user.id}`);
          interaction.followUp('Time is up! The quiz has ended.');
        }
      });
    } catch (error) {
      console.error(error.message);
      interaction.reply('An error occurred while processing the quiz.');
    }
  },
};
