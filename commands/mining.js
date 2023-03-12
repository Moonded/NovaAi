const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mining')
		.setDescription('Provides the active link to the mining hub.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://portal.novaintergalactic.com/mininghub',
			ephemeral: true,
		});
	},
};
