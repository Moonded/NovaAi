const {
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("User Information")
    .setType(ApplicationCommandType.Message),
  async execute(interaction) {},
};
