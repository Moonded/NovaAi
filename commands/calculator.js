const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculator')
		.setDescription('Provides the active link to the calculator.'),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://calculator.novaintergalactic.com',
			ephemeral: true,
		});
	},
};
