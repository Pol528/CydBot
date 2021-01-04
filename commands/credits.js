const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'credits',
    description: 'everyone that helped',
    execute(client, message, args) {
        const credit_embed = new MessageEmbed()
            .setTitle('__CydBot credits:__')
            .setColor(`GREEN`)
            .setAuthor('CydBot', 'https://cdn.discordapp.com/avatars/780118082073001985/bef69073cf780761ab8ea29af911a128.png?size=256')
            .addField('developer:', 'Pol528#6969')
            .addField(`Music part created by:`,`[ZerioDev](https://github.com/ZerioDev), you can find it [here](https://github.com/ZerioDev/Music-bot)`)
            .addField('Cydbot profile picture:', 'stole it from somewhere, if you are the creator please dm Pol528#6969!')
            .addField("got help from:", "Grav#6969, discord.js discord server and stackoverflow.com")
            .addField('inspiration:', "Grav#6969 and GravBot#7521😊")
            .addField('libraries used:', "discord.js, fs, covidapi, discord-player, imageapi.js, mongoose")
            .setFooter('hello from Romania!')
        message.channel.send(credit_embed)
    }}