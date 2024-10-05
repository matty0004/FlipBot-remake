// commands/hello.js
module.exports = {
    data: {
      name: 'hello',
      description: 'This is a hello command!',
    },
    execute(interaction) {
      interaction.reply('Hello!');
    },
  };
  