const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    description: 'invite the bot',
    execute(client, message, args) {
        const invite_embed = new MessageEmbed()
            .setTitle('__Invites__')
            .setDescription(`these are all the invite links:`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/780118082073001985/bef69073cf780761ab8ea29af911a128.webp`)
            .addField(`invite CydBot to your server:`, `[click here](https://discord.com/oauth2/authorize?client_id=780118082073001985&scope=bot&permissions=536210775)`)
            .addField(`join the support server:`, `[click here](https://discord.gg/6eGnaqAyep)`)
            .setColor(`GREEN`)
        message.channel.send(invite_embed)
    }}