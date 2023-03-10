const fetch = require("node-fetch");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("commands")
    .setDescription("List current available commands."),
  async execute(interaction) {
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x00ff00)
      .addFields({
        name: "Available Commands",
        value:
          "ā /commands\nGet a list of all available commands.\nā /discovery\nReport new found Discovery from the verse.\nā /uptime\nGet latest Uptime, updated every 10 Minutes\nā /search\nSearch the Galactapedia.",
      })
      .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
  },
};
