const { Events, EmbedBuilder } = require('discord.js');
const dotenv = require('dotenv').config();
// client = require('../main.js');

const client = global.client;

module.exports = {
	name: Events.GuildAuditLogEntryCreate,
	async execute(interaction) {
		const action = interaction;
		console.log(action.changes);
		const exampleEmbed = new EmbedBuilder()
			.setColor(0xffea00)
			.setTitle(`${action.target} ${action.actionType}`)
			.setAuthor({
				name: action.executor.username,
				iconURL: `https://cdn.discordapp.com/avatars/${action.executor.id}/${action.executor.avatar}`,
			})
			.setDescription('New Audit Log Entry')
			.addFields(
				{
					name: 'Action',
					value: `${action.action}, ${action.actionType}`,
					inline: true,
				},
				{ name: 'Target', value: `${action.target}`, inline: true },
				{ name: 'Reason', value: `${action.reason}`, inline: true },
				{
					name: 'Changes',
					value: `${action.changes[0].key}:  Old: ${action.changes[0].old}, New: ${action.changes[0].new}`,
					inline: true,
				}
			);

		// .send(`Text`);
		// console.log(client);
		client.channels.cache
			.get(process.env.LOGCHANNELID)
			.send({ embeds: [exampleEmbed] });
	},
};
