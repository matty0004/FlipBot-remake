const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('customer')
    .setDescription('Randomly displays the name of one of Papa\'s loyal customers.')
    .addStringOption(option => option.setName('game')
      .setDescription('The game where your customer debuts at.')),

  async execute(interaction) {
    const game = interaction.options.getString('game');

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let customerdb = require('./customers.json');
    let customerdbFiltered = customerdb.filter(customer => customer.gameversion.includes(game));

    if (customerdbFiltered.length > 0) {
      let randomCustomerIndex = getRandomInt(customerdbFiltered.length);
      let randomCustomer = customerdbFiltered[randomCustomerIndex];
      await interaction.reply(`${randomCustomer.name}`);
    } else {
      await interaction.reply(`No customers found for ${game}.`);
    }
  }
};