/**
 * @type {import('discord-api-types/v10').APIUser}
 */

const { SlashCommandBuilder } = require("discord.js");
const emojiUnicode = require("emoji-unicode");
// const Client = require("../index");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription("Report a discovery")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("create")
        .setDescription("Create a rank")
        .addStringOption((option) =>
          option
            .setName("emoji")
            .setDescription("Emoji for the rank")
            .setRequired(true)
        )
        .addRoleOption((option) =>
          option
            .setName("role")
            .setDescription("Role for the rank")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("messageid")
            .setDescription("Message ID for raction")
            .setRequired(true)
        )
    ),
  async execute(interaction) {
    const channel = interaction.options.getChannel("channel");
    const Emoji = emojiUnicode(interaction.options.get("emoji").value);
    console.log(
      Emoji,
      // interaction.options.get("emoji").value.toString()
      //   interaction.guild.emojis
      //     .resolveIdentifier(await interaction.options.get("emoji").value)
      //     .toString()
      interaction.guild.emojis.resolveIdentifier(interaction.options.get("emoji").value)
    );
    // console.log(
    //   interaction.options.get("emoji").value,
    //   interaction.options.getRole("role").id,
    //   interaction.options.getString("messageid")
    // );
    await interaction.reply({ content: "Send Pong!", ephemeral: true });
  },
};
