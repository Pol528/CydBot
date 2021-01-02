module.exports = (client, message, queue, playlist) => {
    const sucesss = new MessageEmbed()
            .setTitle('Playlist')
            .setDescription(`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs)!`)
            .setColor(`GREEN`)
            .setTimestamp()
    message.channel.send(sucesss);
};