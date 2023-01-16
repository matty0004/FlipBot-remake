const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { PermissionsBitField, EmbedBuilder } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName("funfact")
  .setDescription('Enriches your knowledge about the Flipverse with an interesting fact.'),
      

  async execute ( interaction ) {

        const {client, guild} = interaction;

        const choice =  require('./funfact.json');
    
        const ball = Math.round((Math.random() * choice.length))

        
            await interaction.reply (`${choice[ball]}`).catch(err =>{
              interaction.reply('Yes, No, Maybe so?')
            })
  },
}