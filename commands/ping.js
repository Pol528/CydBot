const { Discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    discription: 'discription',
    execute(client, message, args) {
        const ping_embed = new MessageEmbed()
            .setDescription("**Pong!**🏓")
            .addField('Latency:', `${Date.now() - message.createdTimestamp}ms`)
            .addField('API Latency:', `${Math.round(client.ws.ping)}ms`)
            .setFooter(`${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
            .setColor(`RANDOM`)
        message.channel.send(ping_embed).then(() => message.react('🏓'))
}};