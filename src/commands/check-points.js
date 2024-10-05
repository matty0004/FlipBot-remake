const { EmbedBuilder } = require('discord.js');
const { userPointsMap, quizAttemptsMap, loadDataFromFile } = require('../sharedData');

module.exports = {
  data: {
    name: 'check-points',
    description: 'Check your total points and quiz attempts',
  },
  async execute(interaction) {
    try {
      // Load data from the file before checking points
      await loadDataFromFile();

      const userId = interaction.user.id;

      if (!userPointsMap.has(userId)) {
        const noPointsEmbed = new EmbedBuilder()
          .setColor('#ff0000') // Red color for no points
          .setTitle(`User ${interaction.user.tag}`)
          .setDescription(
            "You haven't earned any points yet. Participate in a quiz to start earning!"
          )
          .setThumbnail(interaction.user.displayAvatarURL());

        console.log(`User ${userId} hasn't earned any points yet.`);
        interaction.reply({ embeds: [noPointsEmbed] });
      } else {
        const totalPoints = userPointsMap.get(userId);
        const attempts = quizAttemptsMap.get(userId) || 0;

        const pointsEmbed = new EmbedBuilder()
          .setColor('#00ff00') // Green color for points
          .setTitle(`User ${interaction.user.tag}`)
          .setDescription(
            `Your total points: ${totalPoints}\nYou have participated in ${attempts} quiz${
              attempts === 1 ? '' : 'zes'
            }.`
          )
          .setThumbnail(interaction.user.displayAvatarURL());

        console.log(
          `User ${userId} has total points: ${totalPoints} from ${attempts} quiz${
            attempts === 1 ? '' : 'zes'
          }.`
        );
        interaction.reply({ embeds: [pointsEmbed] });
      }
    } catch (error) {
      console.error(error.message);
      const errorEmbed = new EmbedBuilder()
        .setColor('#ff0000') // Red color for errors
        .setTitle('Error')
        .setDescription('An error occurred while checking points.')
        .setThumbnail(interaction.user.displayAvatarURL());

      interaction.reply({ embeds: [errorEmbed] });
    }
  },
};
