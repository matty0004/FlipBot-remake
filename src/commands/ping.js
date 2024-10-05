
module.exports = {
    data: {
      name: 'ping',
      description: 'This is a ping command!',
    },
    execute(interaction) {
      const ping = Date.now() - interaction.createdTimestamp;
      interaction.reply(`Pong! Latency is ${ping}ms.`);
    },
};  