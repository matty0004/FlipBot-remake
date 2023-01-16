const { Command } = require('discord.js-commando');

module.exports = {
  constructor(client) {
    super(client, {
      name: 'flipdeck',
      aliases: ['card', 'fd'],
      group: 'fun',
      memberName: 'flipdeck',
      description: 'Displays information about a "Flipdeck" from the game "Papa Louie".',
      args: [
        {
          key: 'number',
          prompt: 'What is the number of the Flipdeck you want to see?',
          type: 'string'
        }
      ]
    });
  }

  async run(message, { number }) {
    const flipdecks = require('./flipdeck-data.json');
    const flipdeck = flipdecks.find(deck => deck.number === number);

    if (!flipdeck) {
      return message.say('Could not find a Flipdeck with that number.');
    }

    const embed = {
      color: flipdeck.color,
      title: `Flipdeck ${number}: ${flipdeck.name}`,
      url: `http://www.flipline.com/flipdeck/${number}`,
      author: {
        name: `Get this card in Flipdeck: Pack ${flipdeck.packnum}`,
        url: flipdeck.authorlink,
        icon_url: flipdeck.authorprofile
      },
      thumbnail: {
        url: flipdeck.thumbnail
      },
      fields: [
        {
          name: 'First Appearance:',
          value: flipdeck.debut
        },
        {
          name: 'About:',
          value: flipdeck.about
        }
      ],
      timestamp: new Date(),
      footer: {
        text: '© Flipline IDS LLC'
      }
    };

    message.say({ embed });
  }
}