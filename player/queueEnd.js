const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const end = new MessageEmbed()
        .setTitle(`Queue`)
        .setDescription(`${client.emotes.error} - Music stopped as there is no more music in the queue!`)
        .setTimestamp()
        .setColor(2123412)
    message.channel.send(end);
};