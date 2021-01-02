const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: 'unmute a memeber',
    async execute(client, message, args) {
        let member = message.mentions.members.first()
        if(!member) return message.reply('you need to tell me who to unmute!')
        if(!message.member.hasPermission('MANAGE_ROLES'))
          if(!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply("you can't use that here!");
      if (!message.guild.me.permissions.has("MANAGE_ROLES")) {
        return message.reply('I do not have permissions, please contact an administrator');
      }
      let muterole = message.guild.roles.cache.find(role => role.name === "muted");
      if(!muterole) return message.reply('that user isn\'t muted!')
      member.roles.remove(muterole.id)
      const sucesss = new MessageEmbed()
            .setDescription(`${client.emotes.success} - ${member} has been unmuted!`)
            .setColor(`GREEN`)
            .setTimestamp()
      message.channel.send(sucesss)
      
    }}