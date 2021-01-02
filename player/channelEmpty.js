const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const error_1 = new MessageEmbed()
        .setTitle(`Error`)
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - Music stopped as there is no more member in the voice channel!`)
    message.channel.send(error_1);
};