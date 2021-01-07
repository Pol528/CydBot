const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'servercount',
    discription: 'for moderation',
    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("I'm in " + `${client.guilds.cache.size}` + " servers!")
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(embed);
    }}