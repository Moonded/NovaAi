// import { SlashCommandBuilder, BaseInteraction, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from "discord.js";
const djs = require("discord.js"),
  poi = require("../options/discovery/poi2.json"),
  poiMap = new Map(Object.entries(poi));

module.exports = {
  data: new djs.SlashCommandBuilder()
    .setName("discovery")
    .setDescription("Report a discovery")
    .addStringOption((option) =>
      option
        .setName("system")
        .setDescription("Selecet the System")
        .setRequired(true)
        .addChoices(
          { name: "Stanton", value: "Stanton" },
          { name: "Pyro", value: "Pyro" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("version")
        .setDescription("Selecet the Version")
        .setRequired(true)
        .addChoices(
          { name: "Live", value: "Live" },
          { name: "PTU", value: "PTU" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("poi")
        .setDescription("Selecet the Version")
        .setRequired(true)
        .addChoices(
          {
            name: "Comm Array",
            value: "comm_array",
          },
          {
            name: "Space Staion",
            value: "space_station",
          },
          {
            name: "Major Landing Zone",
            value: "major_landing_zone",
          },
          {
            name: "Small Oujtpost (No Pads)",
            value: "small_outpost_no_pads",
          },
          {
            name: "Large Outpost (Has Pads)",
            value: "large_outpost_has_pads",
          },
          {
            name: "Aid Shelter",
            value: "aid_shelter",
          },
          {
            name: "Scrapyard",
            value: "scrapyard",
          },
          {
            name: "Bunker/Underground Facility",
            value: "bunker_underground_facility",
          },
          {
            name: "Cave (Ship Only)",
            value: "cave_ship_only",
          },
          {
            name: "Cave (Foot Only)",
            value: "cave_foot_only",
          },
          {
            name: "Cave (Foot/Vehicle)",
            value: "cave_foot_vehicle",
          },
          {
            name: "Cave (Foot/Vehicle/Ship)",
            value: "cave_foot_vehicle_ship",
          },
          {
            name: "Wreck/Crash Site",
            value: "wreck_crash_site",
          },
          {
            name: "Landmark/Other",
            value: "landmark_other",
          },
          {
            name: "Derelict Outpost",
            value: "derelict_outpost",
          },
          {
            name: "Event Location",
            value: "event_location",
          }
        )
    ),

  async execute(interaction) {

  },
};
