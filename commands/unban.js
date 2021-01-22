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
          if(!userID) { return message.reply(`you need to thell me who's id to unban!`)}
            message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user)
            const unbanembed = new MessageEmbed()
              .setColor(`GREEN`)
              .setDescription(`✅ - <@${userID}> was unbanned!`)
            message.channel.send(unbanembed)
            const unbanembed_1  = new MessageEmbed()
      .setAuthor("CydBot", "https://cdn.discordapp.com/avatars/780118082073001985/bef69073cf780761ab8ea29af911a128.webp")
      .setColor(`GREEN`)
      .setDescription(`You were unbanned from \`\`${message.guild.name}\`\` by \`\`${message.author.tag}\`\`!`)
      .setTimestamp()
      client.users.cache.get(userID).send(unbanembed_1);
      })
    }}