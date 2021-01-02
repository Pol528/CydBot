const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'userinfo',
    description: 'shows ino about a user',
    async execute(client, message, args) {

    let user = message.mentions.users.first()
    if(!user){
    let userinfo = new MessageEmbed()
    .setTitle(message.author.tag)
    .setDescription(`${message.author.toString()}`)
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setColor(`RANDOM`)
    .addField('created on:', (message.author.createdAt))
    .addField('joined on:', (message.member.joinedAt))
    .addField('id:', message.author.id)
    .addField("roles:", message.member.roles.cache.map(r => '`'+r.name+'`').join(' - '), true)
    .setFooter(`requested by: ${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
    .setTimestamp()
    message.channel.send(userinfo) 
    }
    else {
        let member = message.mentions.members.first()
        let user = message.mentions.members.first()
        let userinfo1 = new MessageEmbed()
        .setTitle(member.user.tag)
        .setDescription(`${member.toString()}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
        .setColor(`RANDOM`)
        .addField('created on:', (member.user.createdAt))
        .addField('joined on:', (user.joinedAt)) 
        .addField('id:', member.id)
        .addField('roles:', member.roles.cache.map(r => '`'+r.name+'`').join(' - '), true)
        .setFooter(`requested by: ${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
        .setTimestamp()
        message.channel.send(userinfo1) 
    }


    }}