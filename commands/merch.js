const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('merch')
		.setDescription('Provides the active link to the merchandise page.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://portal.novaintergalactic.com/merchandise',
			ephemeral: true,
		});
	},
};
