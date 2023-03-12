const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('portal')
		.setDescription('Provides the active link to the web portal.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://portal.novaintergalactic.com',
			ephemeral: true,
		});
	},
};
