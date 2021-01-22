const { MessageEmbed, Guild } = require("discord.js");

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
    const banembed  = new MessageEmbed()
      .setAuthor("CydBot", "https://cdn.discordapp.com/avatars/780118082073001985/bef69073cf780761ab8ea29af911a128.webp")
      .setColor(`RED`)
      .setDescription(`You were banned from \`\`${message.guild.name}\`\` by \`\`${message.author.tag}\`\` for \`\`${reason}\`\`!`)
      .setTimestamp()
    member.send(banembed)
    }}