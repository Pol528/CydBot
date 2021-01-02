const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const error_1 = new MessageEmbed()
        .setTitle(`Error`)
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - Music stopped as i have been disconnected from the channel!`)
    message.channel.send(error_1);
};