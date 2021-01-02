const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'ban a member',
    async execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS'))
    return message.reply("you can't use that here!");
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
        return message.reply('I do not have permissions, please contact an administrator');
    }
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member)
      return message.reply("You need to tell me who to ban!");
    if(!member.kickable) 
      return message.reply("i can't ban that member!");
    if(member.id === message.author.id) return message.reply(`You can't ban yourself!`)

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "no reason";
        
    await member.ban({ days: 7, reason: reason })
      .catch(error => message.reply(`${message.author}, there was an error: ${error}`));

      const success = new MessageEmbed()
      .setTitle('Success!')
      .setDescription(`Member banned!`)
      .addField(`member:`, `${member.user.tag}`)
      .addField(`with reason:`, `${reason}`)
      .addField(`banned by:`, `${message.author.tag}`)
      .setColor(`GREEN`)
      .setTimestamp()
    message.channel.send(success);
    //message.reply(`this member was banned from the server: ${member.user.tag}, because: ${reason}`);
    }}