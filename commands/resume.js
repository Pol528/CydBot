const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const already = new MessageEmbed()
            .setTitle('There was an error!')
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - The music is already playing!`)

        if (!client.player.getQueue(message).paused) return message.channel.send(already);

        client.player.resume(message);

        const success = new MessageEmbed()
            .setTitle(`Resume`)
            .setColor(`GREEN`)
            .setDescription(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed!`)
            .setTimestamp()

        message.channel.send(success);
    },
};