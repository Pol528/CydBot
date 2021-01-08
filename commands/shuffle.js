const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        const already = new MessageEmbed()
        .setTitle('There was an error!')
        .setColor(`YELLOW`)
        .setDescription(`${client.emotes.error} - You are not in the same voice channel!`)

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(already);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.shuffle(message);

        const shuffle_embed = new MessageEmbed()
            .setTitle('Shuffle')
            .setColor(`GREEN`)
            .setDescription(`${client.emotes.success} - Queue shuffled **${client.player.getQueue(message).tracks.length}** song(s) !`)

        return message.channel.send(shuffle_embed);
    },
};