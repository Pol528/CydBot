module.exports = {
    name: 'kick',
    description: 'kick a member',
    async execute(client, message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply("you can't use that here!");  
        if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
            return message.reply('I do not have permissions, please contact an administrator');
        }
        let member = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
        if(!member)
          return message.reply("You need to tell me who to kick!");
        if(!member.kickable) 
          return message.reply("i can't kick that member!");
        if(member.id === message.author.id) return message.reply(`You can't kick yourself!`)
        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "no reason";
            
        // Now, time for a swift kick in the nuts!
        await member.kick(reason)
          .catch(error => message.reply(`${message.author}, there was an error: ${error}`));

          const success = new MessageEmbed()
      .setTitle('Success!')
      .setDescription(`Member kicked!`)
      .addField(`member:`, `${member.user.tag}`)
      .addField(`with reason:`, `${reason}`)
      .addField(`kicked by:`, `${message.author.tag}`)
      .setColor(`GREEN`)
      .setTimestamp()
        message.reply(success);
    }}