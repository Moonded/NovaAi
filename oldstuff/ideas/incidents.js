const fetch = require("node-fetch");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("incidents")
    .setDescription("Help. What happened?"),
  async execute(interaction) {
    var html;

    const response = await fetch("http://localhost:3000/incidents");
    if (response.ok) {
      html = await response.text();
    }
    const data = JSON.parse(html);
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x00ff00)
      .setTitle("Latest incidents")
      .setURL("https://status.robertsspaceindustries.com/")
      .addFields({ name: "What?", value: "Don't look at me lie that!" })
      .setTimestamp()
      .setFooter({ text: "Last Updated By Moonded" });

    await interaction.reply({ embeds: [exampleEmbed], ephemeral: true   });
  },
};
