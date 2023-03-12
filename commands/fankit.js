const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fankit')
		.setDescription('Provides the active link to the fankit download.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://portal.novaintergalactic.com/fankit',
			ephemeral: true,
		});
	},
};
