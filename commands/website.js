const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('website')
		.setDescription('Provides the active link to the Website.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://novaintergalactic.com',
			ephemeral: true,
		});
	},
};
