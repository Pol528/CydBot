const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        const already = new MessageEmbed()
        .setTitle('There was an error!')
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - You are not in the same voice channel!`)

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(already);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        const success = new MessageEmbed()
            .setTitle('Skip')
            .setColor(`GREEN`)
            .setDescription(`${client.emotes.success} - Music **stopped** into this server!`)
            .setTimestamp()

        message.channel.send(success);
    },
};