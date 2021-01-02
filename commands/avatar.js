const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'avatar',
    description: 'show someones avatar',
    async execute(client, message, args) {
    let member = message.mentions.users.first()
    if(!member)
    {
        let avatar_embed = new MessageEmbed()
            .setDescription(`**${message.author}'s avatar**:`)
            .setImage(message.author.displayAvatarURL({dynamic : true}))
            .setColor(`PURPLE`)  
            .setTimestamp()    
        message.channel.send(avatar_embed)
    }
    else
    {
        let avatar_embed = new MessageEmbed()
            .setDescription(`**${member}'s avatar**:`)
            .setImage(member.displayAvatarURL({dynamic : true}))
            .setColor(`BLUE`)  
            .setTimestamp()  
        message.channel.send(avatar_embed)
    }
    
    
    }}