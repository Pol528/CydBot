const { MessageEmbed } = require('discord.js');
const { validate } = require('../models/prefix');
const Discord = require('discord.js');
const { resolve } = require('path');

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
      const mutetime = args[1];
      let mute_type = args[2]
      if(mutetime)
      {
        //console.log(`ARGS1`)
        if(args[2])
        {
          //console.log(`ARGS2`)
          const durations = {
            M: 60000,
            H: 60000 * 60
        }
          if(args[2] !== 'M') 
          {
            if(args[2] !== 'H'){ return message.reply(`that isn't a valid duration type, please use (M/H)`)}
          }
          var seconds = mutetime * durations[mute_type]
          //console.log(seconds)
        }
        else{ return message.channel.send(`${client.emotes.error} - please provide a duration type (M/H)`)}
      }
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
        member.roles.add(muterole.id)

      const sucesss = new MessageEmbed()
            .setDescription(`${client.emotes.success} - ${member} has been muted for ${mutetime}${mute_type}`)
            .setColor(`GREEN`)
            .setTimestamp()
      message.channel.send(sucesss)
        //removing role:
      setTimeout(function(){
        if(member.roles.cache.has(muterole))
        {
        member.roles.remove(muterole.id);
        const sucesss = new MessageEmbed()
            .setDescription(`${client.emotes.success} - ${member} has been unmuted because their mute has expired!`)
            .setColor(`GREEN`)
            .setTimestamp()
        message.channel.send(sucesss)
        }
        else{ return }
      }, seconds);
      }
    }}