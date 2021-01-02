const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'mute',
    description: 'mute a memeber',
    async execute(client, message, args) {
      if(!message.member.hasPermission('MANAGE_ROLES'))
        if(!message.member.hasPermission('KICK_MEMBERS'))
          return message.reply("you can't use that here!");  
      if (!message.guild.me.permissions.has("MANAGE_ROLES")) {
        return message.reply('I do not have permissions, please contact an administrator');
      }
      let member = message.mentions.members.first()
      if(!member) return message.reply('you need to tell me who to mute!')
      if(member.id === message.author.id) return message.reply(`You can't mute yourself!`)
      let muterole = message.guild.roles.cache.find(role => role.name === "muted");
      const already = new MessageEmbed()
            .setTitle('There was an error!')
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - ${member} is already muted!`)
      if(!muterole)
      {
        const creating = new MessageEmbed()
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - I can't find a role called "muted", creating one now...`)

        message.channel.send(creating)
        try{
          muterole = await message.guild.roles.create({
          data: {
            name: 'muted',
            color: "#000000",
            permissions:[]
          }
          })
          message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      if(member.roles.cache.has(muterole.id)) return message.channel.send(already)
      let mutetime = args[1];
      if(!mutetime)
      {
      member.roles.add(muterole)
      const sucesss = new MessageEmbed()
            .setDescription(`${client.emotes.success} - ${member} has been muted indefinitely!`)
            .setColor(`GREEN`)
            .setTimestamp()
      message.channel.send(sucesss)
      }
      else 
      {
        //if(!id) return message.reply('there was an error, please try again later!')
        member.roles.add(muterole.id)
/*
      let seconds = Math.floor(mutetime / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;
*/
      const sucesss = new MessageEmbed()
            .setDescription(`${client.emotes.success} - ${member} has been muted for ${mutetime}ms`)
            .setColor(`GREEN`)
            .setTimestamp()
      message.channel.send(sucesss)
        //removing role:
      setTimeout(function(){
        member.roles.remove(muterole.id);
        const sucesss = new MessageEmbed()
            .setDescription(`${client.emotes.success} - ${member} has been unmuted!`)
            .setColor(`GREEN`)
            .setTimestamp()
      }, mutetime);
      }
    }}