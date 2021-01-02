const { MessageEmbed } = require("discord.js");

module.exports = (client, message, track) => {
    const start = new MessageEmbed()
        .setDescription(`${client.emotes.music} - Now playing [${track.title}](${track.url}) into ${message.member.voice.channel.name}!`)
        .setThumbnail(track.thumbnail)
        .setTimestamp()
        .setColor(`GREEN`)
    message.channel.send(start);
};