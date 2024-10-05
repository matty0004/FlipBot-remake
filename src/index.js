require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});
const sharedData = require('./sharedData');
const { loadDataFromFile } = require('./sharedData');

// Initialize the commands map
client.commands = new Map();

client.on('ready', () => {
  console.log(`${client.user.tag} is ready!`);
  client.user.setActivity('Papa\'s Paleteria To Go!');

  const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    // Update the path to correctly point to the commands directory
    const command = require(path.resolve(__dirname, 'commands', file));
  
    // Check if the command object has the expected structure
    if (command && command.data && command.data.name) {
      client.commands.set(command.data.name, command);
  
      // Check if client.application is not null before creating commands
      if (client.application) {
        client.application.commands.create(command.data);
      } else {
        console.warn('client.application is null. Commands will be created once the bot is ready.');
      }
    } else {
      console.error(`Invalid command file structure for file ${file}`);
    }
  }  
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(process.env.TOKEN);
