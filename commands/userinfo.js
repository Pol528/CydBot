const { MessageEmbed } = require('discord.js')
const moment = require('moment')

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
  };
module.exports = {
    name: 'userinfo',
    description: 'shows ino about a user',
    async execute(client, message, args) {

    let user = message.mentions.users.first()
    if(!user){
        let rolemap = message.member.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(r => r)
        .join(",");
        if (rolemap.length > 1024) rolemap = "To many roles to display";
        if (!rolemap) rolemap = "No roles";
    let userinfo = new MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
    .setDescription(`${message.author.toString()}`)
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setColor(1752220)
    .addField('created on:', `${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
    .addField('joined on:', `${moment(message.author.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
    .addField('id:', message.author.id)
    .addField('Roles:', rolemap, true)
    .setFooter(`requested by: ${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
    .setTimestamp()
    message.channel.send(userinfo) 
    }
    else {
        let member = message.mentions.members.first()
        let user = message.mentions.members.first()
        let rolemap = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
        let userinfo1 = new MessageEmbed()
        .setTitle(member.user.tag)
        .setDescription(`${member.toString()}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
        .setColor(16580705)
        .addField('created on:', `${moment(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
        .addField('joined on:', `${moment(user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
        .addField('id:', member.id)
        .addField('roles:', rolemap, true)
        .setFooter(`requested by: ${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
        .setTimestamp()
        message.channel.send(userinfo1) 
    }

    }}