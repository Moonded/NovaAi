/**
 * @type {import('discord-api-types/v10').APIUser}
 */

const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isMessageContextMenuCommand()) return;
    console.log(interaction.targetMessage);
    await interaction.reply({
      content: interaction.targetMessage.content,
      ephemeral: true,
    });
  },
};
