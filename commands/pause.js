const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const already = new MessageEmbed()
            .setTitle('There was an error!')
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - The music is already paused!`)

        if (client.player.getQueue(message).paused) return message.channel.send(already);

        client.player.pause(message);

        const success = new MessageEmbed()
            .setTitle(`Pause`)
            .setColor(`GREEN`)
            .setDescription(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`)
            .setTimestamp()

        message.channel.send(success);
    },
};