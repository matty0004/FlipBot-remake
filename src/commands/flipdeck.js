const { EmbedBuilder } = require("discord.js");
const Flipdecks = require("./flipdeck-data.json");

module.exports = {
  data: {
    name: "flipdeck",
    description: "Display information about a Flipdeck.",
    options: [
      {
        name: "identifier", // Can be number or name
        description: "The number or name of the Flipdeck to display.",
        type: 3, // Type 3 is STRING
        required: true,
      },
    ],
  },

  execute(interaction) {
    try {
      const identifier = interaction.options.getString("identifier").toLowerCase();
      const user = interaction.user.username; // Get the username of the user
      console.log(`Received request for Flipdeck: ${identifier} from user: ${user}`);

      // Initialize variables
      let flipdeck;
      let number;

      // Determine if the identifier is a number or name
      if (!isNaN(identifier)) {
        // It's a number, search by number
        number = identifier;
        flipdeck = Flipdecks[number];
      } else {
        // It's a name, search by name
        flipdeck = Object.values(Flipdecks).find(deck => deck.name.toLowerCase() === identifier);
        if (flipdeck) {
          // Get the number from the keys of the Flipdecks object
          number = Object.keys(Flipdecks).find(key => Flipdecks[key].name.toLowerCase() === identifier);
        }
      }

      // If no Flipdeck is found, reply with an error
      if (!flipdeck) {
        console.log(`Flipdeck with identifier "${identifier}" not found. Requested by: ${user}`);
        interaction.reply("Flipdeck with the given number or name is not available!");
        return;
      }

      console.log(`Flipdeck found: ${flipdeck.name}. Requested by: ${user}`);

      // Create the embed with the Flipdeck number and other details
      const embed = new EmbedBuilder()
        .setColor(flipdeck.color)
        .setTitle(`Flipdeck ${number}: ${flipdeck.name}`) // Always show the number in the title
        .setURL(`https://www.flipline.com/flipdeck/${number}`) // Updated URL format
        .setThumbnail(flipdeck.thumbnail)
        .addFields(
          { name: 'First Appearance:', value: flipdeck.debut }
        );

      // Add extra fields if the number is <= 210
      if (number && parseInt(number) <= 210) {
        embed.setAuthor({
          name: `Get this card in Flipdeck: Pack ${flipdeck.packnum}`,
          iconURL: "https://play-lh.googleusercontent.com/EZf8lYAJLkOmd2boBVHoW7Jd6zzd8cbjw7Oobl7RCdtVzHRanKPkmEpIeAhxYB-krW0z",
        });

        embed.addFields(
          { name: 'Hometown:', value: flipdeck.hometown || "N/A", inline: true },
          { name: 'Occupation:', value: flipdeck.occupation || "N/A", inline: true },
          { name: '** **', value: '** **' }, // Placeholder to separate sections
          { name: 'Loves:', value: flipdeck.loves || "N/A", inline: true },
          { name: 'Hates:', value: flipdeck.hates || "N/A", inline: true },
        );
      }

      embed
        .addFields({ name: 'About:', value: flipdeck.about || "N/A", inline: false })
        .setTimestamp()
        .setFooter({ text: '© Flipline IDS LLC' });

      interaction.reply({ content: null, embeds: [embed] });
    } catch (error) {
      const user = interaction.user ? interaction.user.username : 'Unknown user';
      console.error(`Error processing Flipdeck request for ${identifier}. Requested by ${user}:`, error.message);
      interaction.reply("An error occurred while processing your request.");
    }
  },
};
