const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue, track) => {
    const sucesss = new MessageEmbed()
            .setTitle('Playlist')
            .setDescription(`${client.emotes.music} - [${track.title}](${track.url}) has been added to the queue!`)
            .setThumbnail(`${track.thumbnail}`)
            .setColor(`GREEN`)
            .setTimestamp()
    message.channel.send(sucesss);
};