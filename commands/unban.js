const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unban',
    description: 'unban',
    async execute(client, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply(`you do not have perms to unban someone`)
          }
          
          if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
            return message.reply('I do not have permissions, please contact an administrator');
        }
          
          let userID = args[0]
            message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user)
            const unbanembed = new MessageEmbed()
              .setDescription(`✅ - <@${userID}> was unbanned!`)
            message.channel.send(unbanembed)
      })
    }}