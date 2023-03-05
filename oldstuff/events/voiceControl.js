/**
 * @type {import('discord-api-types/v10').APIUser}
 */

const { Events } = require("discord.js"),
  ChannelMap = new Map(),
  CreateChannelID = "1064270683858817075",
  CreateCategoryID = "1063961121150742630",
  CreateChannelConrolID = "1063961162477211748";

module.exports = {
  name: Events.VoiceStateUpdate,
  async execute(oldVoiceState, newVoiceState) {
    if (oldVoiceState.member.user.bot) return;
    if (newVoiceState.channelId !== null) {
      const ChannelCreateParent = newVoiceState.channel.parent;
      if (ChannelCreateParent.id === CreateCategoryID) {
        const ParentChildren = ChannelCreateParent.children.cache;
        ParentChildren.forEach((channel) => {
          if (channel === CreateChannelConrolID || channel === CreateChannelID)
            return;
          if (channel.members.size === 0) {
            if (channel.id === CreateChannelID) return;
            channel.delete();
          }
        });
        if (newVoiceState.channelId !== CreateChannelID) return;
        ChannelCreateParent.children
          .create({
            name: newVoiceState.member.user.username,
            type: 2,
          })
          .then((channel) => {
            newVoiceState.setChannel(channel.id);
          });
      }
    } else {
      if (oldVoiceState.channel.id === CreateChannelID) return;
      const VoiceChannelMemberLength = oldVoiceState.channel.members.size;
      if (VoiceChannelMemberLength === 0) {
        oldVoiceState.channel.delete();
      }
    }
  },
};