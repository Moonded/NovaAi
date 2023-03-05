const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('Provides information about the user.')
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('The user to provide information about.')
		),
	async execute(interaction) {
		console.log(interaction.options);
		const Target = interaction.options.getUser('target');
		console.log(Target);
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(
			`This command was run by ${Target.username}, who joined on ${Target.joinedAt}.`
		);
	},
};
