const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('starmap')
		.setDescription('Provides the active link to the starmap.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://novaintergalactic.com/starmap',
			ephemeral: true,
		});
	},
};
