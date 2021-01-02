const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query) => {
    const error_1 = new MessageEmbed()
        .setTitle(`Error`)
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - No results found on YouTube for ${query}!`)
    message.channel.send(error_1);
};