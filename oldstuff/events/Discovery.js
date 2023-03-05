// // import { Events } from 'discord.js';
// const { Events, EmbedBuilder } = require("discord.js"),
//   djs = require("discord.js"),
//   fs = require("fs"),
//   postData = require("../lib/post.js"),
//   guildSettings = require("../lib/guildSettings.js"),
//   crypto = require("crypto"),
//   map = new Map(),
//   poi = require("../options/discovery/poi2.json"),
//   poiMap = new Map(Object.entries(poi));

// poiMap.set("undefined", "N/A");

// map.set("system", "Unknown");
// map.set("version", "Unknown");
// map.set("poi_type", "Unknown");
// map.set("celestrialbodyInput", "Unknown");
// map.set("locationInput", "Unknown");
// map.set("coordinatesInput", "Unknown");
// map.set("organisationInput", "Unknown");
// map.set("observationInput", "Unknown");
// map.set("uuid", "Unknown");

// module.exports = {
//   name: Events.InteractionCreate,
//   async execute(interaction) {
//     var canNotSubmit = false;
//     const discoveryEmbed = new djs.EmbedBuilder()
    //   .setColor(0x00ff00)
    //   .setTitle("Discovery Report Card Wizard")
    //   .setDescription(
    //     "Please fill out the following fields using the buttons below. \n Once you have submitted the details, you can submit the form."
    //   )
    //   .setFields(
    //     { value: map.get("system"), name: "System", inline: true },
    //     { value: map.get("version"), name: "Version", inline: true },
    //     {
    //       value: "\u200B",
    //       name: "POI Type",
    //       inline: true,
    //     },
    //     {
    //       value: map.get("celestrialbodyInput"),
    //       name: "Celestrial",
    //       inline: true,
    //     },
    //     { value: map.get("locationInput"), name: "Location", inline: true },
    //     {
    //       value: map.get("coordinatesInput"),
    //       name: "Coordiante",
    //       inline: true,
    //     },
    //     {
    //       value: map.get("organisationInput"),
    //       name: "Organisation",
    //       inline: true,
    //     },
    //     {
    //       value: "\u200B",
    //       name: "Discoverd by",
    //       inline: true,
    //     },
    //     { value: map.get("observationInput"), name: "Overview", inline: true }
    //   )
    //   .setTimestamp()
//       .setFooter({ text: map.get("uuid") });

//     //
//     // Init Command Response
//     //

//     if (interaction.isCommand() && interaction.commandName == "discovery") {
//       map.set("user", interaction.user.id);
//       map.set("uuid", crypto.randomUUID());
//       map.set("system", interaction.options.getString("system"));
//       map.set("version", interaction.options.getString("version"));
//       map.set("poi_type", interaction.options.getString("poi"));

//       discoveryEmbed
//         .setFields(
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
//           {
//             value: map.get("observationInput"),
//             name: "Overview",
//             inline: true,
//           }
//         )
//         .setFooter({ text: map.get("uuid") });

//       const ButtonsRow = new djs.ActionRowBuilder()
//         .addComponents(
//           new djs.ButtonBuilder()
//             .setCustomId("system")
//             .setLabel("System")
//             .setStyle(djs.ButtonStyle.Primary)
//         )
//         .addComponents(
//           new djs.ButtonBuilder()
//             .setCustomId("version")
//             .setLabel("Version")
//             .setStyle(djs.ButtonStyle.Primary)
//         )
//         .addComponents(
//           new djs.ButtonBuilder()
//             .setCustomId("poi")
//             .setLabel("POI")
//             .setStyle(djs.ButtonStyle.Primary)
//         )
//         .addComponents(
//           new djs.ButtonBuilder()
//             .setCustomId("details")
//             .setLabel("Details")
//             .setStyle(djs.ButtonStyle.Primary)
//         )
//         .addComponents(
//           new djs.ButtonBuilder()
//             .setCustomId("submit")
//             .setLabel("Submit")
//             .setStyle(djs.ButtonStyle.Success)
//             .setDisabled(canNotSubmit)
//         );

//       await interaction.reply({
//         ephemeral: false,
//         embeds: [discoveryEmbed],
//         components: [ButtonsRow],
//       });
//     }
//     if (interaction.user == map.get("user")) {
//       //
//       // System Command Response
//       //

//       if (interaction.isButton() && interaction.customId == "system") {
//         discoveryEmbed.setFields(
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
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         const MenuRow = new djs.ActionRowBuilder().addComponents(
//           new djs.StringSelectMenuBuilder()
//             .setCustomId("menuSystem")
//             .setPlaceholder("Nothing selected")
//             .addOptions(
//               {
//                 label: "Stanton",
//                 value: "Stanton",
//               },
//               {
//                 label: "Pyro",
//                 value: "Pyro",
//               }
//             )
//         );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [MenuRow, ButtonsRow],
//         });
//       }

//       //
//       // System Menu Command Response
//       //

//       if (
//         interaction.isStringSelectMenu() &&
//         interaction.customId == "menuSystem"
//       ) {
//         map.set("system", interaction.values[0]);
//         console.log(interaction.values[0]);
//         console.log(map);
//         discoveryEmbed.setFields(
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
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [ButtonsRow],
//         });
//       }

//       //
//       // Version Command Response
//       //

//       if (interaction.isButton() && interaction.customId == "version") {
//         discoveryEmbed.setFields(
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
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         const MenuRow = new djs.ActionRowBuilder().addComponents(
//           new djs.StringSelectMenuBuilder()
//             .setCustomId("menuVersion")
//             .setPlaceholder("Nothing selected")
//             .addOptions(
//               {
//                 label: "PTU",
//                 value: "PTU",
//               },
//               {
//                 label: "Live",
//                 value: "Live",
//               }
//             )
//         );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [MenuRow, ButtonsRow],
//         });
//       }

//       //
//       // Version Menu Command Response
//       //

//       if (
//         interaction.isStringSelectMenu() &&
//         interaction.customId == "menuVersion"
//       ) {
//         map.set("version", interaction.values[0]);

//         console.log(map);
//         discoveryEmbed.setFields(
//           { value: map.get("system"), name: "System", inline: true },
//           { value: map.get("version"), name: "Version", inline: true },
//           {
//             value: poiMap.get(map.get("poi_type")),
//             name: "POI Type",
//             inline: true,
//           },
//           {
//             value: "N/A",
//             name: "Celestrial",
//             inline: true,
//           },
//           { value: "N/A", name: "Location", inline: true },
//           {
//             value: "N/A",
//             name: "Coordiante",
//             inline: true,
//           },
//           {
//             value: "N/A",
//             name: "Organisation",
//             inline: true,
//           },
//           {
//             value: interaction.user.username,
//             name: "Discoverd by",
//             inline: true,
//           },
//           { value: "N/A", name: "Overview", inline: true }
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [ButtonsRow],
//         });
//       }

//       //
//       // POI Command Response
//       //

//       if (interaction.isButton() && interaction.customId == "poi") {
//         discoveryEmbed.setFields(
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
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         const MenuRow = new djs.ActionRowBuilder().addComponents(
//           new djs.StringSelectMenuBuilder()
//             .setCustomId("menuPOI")
//             .setPlaceholder("Nothing selected")
//             .addOptions(
//               {
//                 label: "Comm Array",
//                 value: "comm_array",
//               },
//               {
//                 label: "Space Staion",
//                 value: "space_station",
//               },
//               {
//                 label: "Major Landing Zone",
//                 value: "major_landing_zone",
//               },
//               {
//                 label: "Small Oujtpost (No Pads)",
//                 value: "small_outpost_no_pads",
//               },
//               {
//                 label: "Large Outpost (Has Pads)",
//                 value: "large_outpost_has_pads",
//               },
//               {
//                 label: "Aid Shelter",
//                 value: "aid_shelter",
//               },
//               {
//                 label: "Scrapyard",
//                 value: "scrapyard",
//               },
//               {
//                 label: "Bunker/Underground Facility",
//                 value: "bunker_underground_facility",
//               },
//               {
//                 label: "Cave (Ship Only)",
//                 value: "cave_ship_only",
//               },
//               {
//                 label: "Cave (Foot Only)",
//                 value: "cave_foot_only",
//               },
//               {
//                 label: "Cave (Foot/Vehicle)",
//                 value: "cave_foot_vehicle",
//               },
//               {
//                 label: "Cave (Foot/Vehicle/Ship)",
//                 value: "cave_foot_vehicle_ship",
//               },
//               {
//                 label: "Wreck/Crash Site",
//                 value: "wreck_crash_site",
//               },
//               {
//                 label: "Landmark/Other",
//                 value: "landmark_other",
//               },
//               {
//                 label: "Derelict Outpost",
//                 value: "derelict_outpost",
//               },
//               {
//                 label: "Event Location",
//                 value: "event_location",
//               }
//             )
//         );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [MenuRow, ButtonsRow],
//         });
//       }

//       //
//       // POI Menu Command Response
//       //

//       if (
//         interaction.isStringSelectMenu() &&
//         interaction.customId == "menuPOI"
//       ) {
//         map.set("poi_type", interaction.values[0]);

//         console.log(map);
//         discoveryEmbed.setFields(
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
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [ButtonsRow],
//         });
//       }

//       //
//       // Details Command Response
//       //

//       if (interaction.isButton() && interaction.customId == "details") {
//         const modal = new djs.ModalBuilder()
//             .setCustomId("DiscoveryModal")
//             .setTitle("Discovery"),
//           orgInput = new djs.TextInputBuilder()
//             .setCustomId("organisationInput")
//             .setLabel("ORGANISATION NAME (Optional)")
//             .setStyle(djs.TextInputStyle.Short)
//             .setPlaceholder("Give us your Org Name (No link)")
//             .setRequired(false),
//           celestrialInput = new djs.TextInputBuilder()
//             .setCustomId("celestrialbodyInput")
//             .setLabel("CELESTIAL BODY")
//             .setStyle(djs.TextInputStyle.Short)
//             .setRequired(true),
//           coordinatesInput = new djs.TextInputBuilder()
//             .setCustomId("coordinatesInput")
//             .setLabel("COORDINATES")
//             .setStyle(djs.TextInputStyle.Paragraph)
//             .setRequired(true),
//           locationInput = new djs.TextInputBuilder()
//             .setCustomId("locationInput")
//             .setLabel("NAME OF YOUR LOCATION")
//             .setStyle(djs.TextInputStyle.Short)
//             .setRequired(true),
//           observationInput = new djs.TextInputBuilder()
//             .setCustomId("observationInput")
//             .setLabel("OBSERVATIONS (Optional)")
//             .setStyle(djs.TextInputStyle.Paragraph)
//             .setPlaceholder("No Observations")
//             .setRequired(false),
//           Organisations = new djs.ActionRowBuilder().addComponents(orgInput),
//           Celestrials = new djs.ActionRowBuilder().addComponents(
//             celestrialInput
//           ),
//           Coordiantes = new djs.ActionRowBuilder().addComponents(
//             coordinatesInput
//           ),
//           Locations = new djs.ActionRowBuilder().addComponents(locationInput),
//           Observations = new djs.ActionRowBuilder().addComponents(
//             observationInput
//           );

//         modal.addComponents(
//           Celestrials,
//           Locations,
//           Coordiantes,
//           Organisations,
//           Observations
//         );
//         await interaction.showModal(modal);
//       }

//       //
//       // Details Modal Command Response
//       //

//       if (
//         interaction.isModalSubmit() &&
//         interaction.customId == "DiscoveryModal"
//       ) {
//         interaction.fields.fields.forEach(function (value, key) {
//           switch (key) {
//             case "organisationInput":
//               map.set(key, value.value || "No Organisation");
//               break;
//             case "observationInput":
//               map.set(key, value.value || "No Observation");
//               break;
//             default:
//               map.set(key, value.value || "N/A");
//           }
//         });

//         canNotSubmit = false;
//         console.log(map);
//         discoveryEmbed.setFields(
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
//         );

//         const ButtonsRow = new djs.ActionRowBuilder()
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("system")
//               .setLabel("System")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("version")
//               .setLabel("Version")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("poi")
//               .setLabel("POI")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("details")
//               .setLabel("Details")
//               .setStyle(djs.ButtonStyle.Primary)
//           )
//           .addComponents(
//             new djs.ButtonBuilder()
//               .setCustomId("submit")
//               .setLabel("Submit")
//               .setStyle(djs.ButtonStyle.Success)
//               .setDisabled(canNotSubmit)
//           );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [ButtonsRow],
//         });
//       }

//       if (interaction.isButton() && interaction.customId == "submit") {
//         discoveryEmbed
//           .setTitle("Discovery Report Card")
//           .setDescription(null)
//           .setFields(
//             { value: map.get("system"), name: "System", inline: true },
//             { value: map.get("version"), name: "Version", inline: true },
//             {
//               value: poiMap.get(map.get("poi_type")),
//               name: "POI Type",
//               inline: true,
//             },
//             {
//               value: map.get("celestrialbodyInput"),
//               name: "Celestrial",
//               inline: true,
//             },
//             { value: map.get("locationInput"), name: "Location", inline: true },
//             {
//               value: map.get("coordinatesInput"),
//               name: "Coordiante",
//               inline: true,
//             },
//             {
//               value: map.get("organisationInput"),
//               name: "Organisation",
//               inline: true,
//             },
//             {
//               value: interaction.user.username,
//               name: "Discoverd by",
//               inline: true,
//             },
//             {
//               value: map.get("observationInput"),
//               name: "Overview",
//               inline: true,
//             }
//           );

//         await interaction.update({
//           ephemeral: false,
//           embeds: [discoveryEmbed],
//           components: [],
//         });
//       }
//     }
//   },
// };