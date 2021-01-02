const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        const already = new MessageEmbed()
        .setTitle('There was an error!')
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - You are not in the same voice channel!`)

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(already);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const error_1 = new MessageEmbed()
            .setTitle(`Error!`)
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - Please enter a valid number !`)

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(error_1);

        const error_2 = new MessageEmbed()
            .setTitle(`Error`)
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - Please enter a valid number (between 1 and 100) !`)

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(error_2);

        client.player.setVolume(message, parseInt(args[0]));

        const sucesss = new MessageEmbed()
            .setTitle('Volume')
            .setDescription(`${client.emotes.success} - Volume set to **${parseInt(args[0])}%** !`)
            .setColor(`GREEN`)
            .setTimestamp()

        message.channel.send(sucesss);
    },
};