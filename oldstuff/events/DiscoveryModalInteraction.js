// // import { Events } from 'discord.js';
// const { Events, EmbedBuilder } = require("discord.js"),
//   fs = require("fs"),
//   postData = require("../lib/post.js"),
//   guildSettings = require("../lib/guildSettings.js"),
//   crypto = require("crypto"),
//   map = new Map(),
//   poi = require("../options/discovery/poi2.json"),
//   poiMap = new Map(Object.entries(poi));

// module.exports = {
//   name: Events.InteractionCreate,
// //   async execute(interaction) {
//     map.set("user", interaction.user.id);
//     map.set("uuid", crypto.randomUUID());
//     if (interaction.isCommand() && interaction.commandName == "discovery") {
//       map.set("system", interaction.options.getString("system"));
//       map.set("version", interaction.options.getString("version"));
//       map.set("poi_type", interaction.options.getString("poi"));
//     }
//     if (
//       interaction.isModalSubmit() &&
//       interaction.customId == "DiscoveryModal"
//     ) {
//       await interaction.deferReply();
//       interaction.fields.fields.forEach(function (value, key) {
//         switch (key) {
//           case "organisationInput":
//             map.set(key, value.value || "No Organisation");
//             break;
//           case "observationInput":
//             map.set(key, value.value || "No Observation");
//             break;
//           default:
//             map.set(key, value.value || "N/A");
//         }
//       });

//       const guildId = guildSettings(interaction.guildId);
//       if (guildId.settings.serverUpload == true) {
//         postData(guildId.settings.discoveryUploadURI, [...map]);
//       }
//       const exampleEmbed = new EmbedBuilder()
//         .setColor(0x00ff00)
//         .setTitle("Discovery Report Card")
//         .addFields(
//           { value: map.get("system"), name: "System", inline: true },
//           { value: map.get("version"), name: "Version", inline: true },
//           {
//             value: poiMap.get(map.get("poi_type")),
//             name: "POI Type",
//             inline: true,
//           },
//           {
//             value: map.get("celestrialbodyInput"),
//             name: "Celestrial",
//             inline: true,
//           },
//           { value: map.get("locationInput"), name: "Location", inline: true },
//           {
//             value: map.get("coordinatesInput"),
//             name: "Coordiante",
//             inline: true,
//           },
//           {
//             value: map.get("organisationInput"),
//             name: "Organisation",
//             inline: true,
//           },
//           {
//             value: interaction.user.username,
//             name: "Discoverd by",
//             inline: true,
//           },
//           { value: map.get("observationInput"), name: "Overview", inline: true }
//           // { value: "\u200B", name: "\u200B", inline: true },
//         )
//         .setTimestamp()
//         .setFooter({ text: map.get("uuid") });

//       await interaction.editReply({ embeds: [exampleEmbed] });
//     }
//   },
// };
