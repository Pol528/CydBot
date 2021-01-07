const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        const already = new MessageEmbed()
        .setTitle('There was an error!')
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - Please indicate the title of a song!`)

        if (!args[0]) return message.channel.send(already);

        client.player.play(message, args.join(" "));
    },
};