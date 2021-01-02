const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks) => {
    const error_1 = new MessageEmbed()
        .setTitle(`Error`)
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - You did not provide a valid response. Please send the command again!`)
    message.channel.send(error_1);
};