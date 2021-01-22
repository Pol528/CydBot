const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'softban',
    description: 'softban someone',
    async execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply("you can't use that here!");
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
            return message.reply('I do not have permissions, please contact an administrator');
        }
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!member)
          return message.reply("You need to tell me who to softban!");
        if(!member.kickable) 
          return message.reply("i can't softban that member!");
        if(member.id === message.author.id) return message.reply(`You can't softban yourself!`)
        //ban
        await member.ban({ days: 7, reason: 'softbanned' })
      .catch(error => message.reply(`${message.author}, there was an error: ${error}`));
      //unban
      message.guild.members.unban(member.id)

      const success = new MessageEmbed()
      .setTitle('Success!')
      .setDescription(`Member softbanned!`)
      .addField(`member:`, `${member.user.tag}`)
      //.addField(`with reason:`, `none`)
      .addField(`softbanned by:`, `${message.author.tag}`)
      .setColor(`GREEN`)
      .setTimestamp()
    message.channel.send(success);
    const dmembed = new MessageEmbed()
    .setAuthor("CydBot", "https://cdn.discordapp.com/avatars/780118082073001985/bef69073cf780761ab8ea29af911a128.webp")
    .setColor(`RED`)
    .setDescription(`You were softbanned on \`\`${message.guild.name}\`\` by \`\`${message.author.tag}\`\`!`)
    member.send(dmembed)
    }}