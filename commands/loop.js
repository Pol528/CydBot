const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        const disabeled_embed = new MessageEmbed()
            .setTitle('Loop mode')
            .setColor(`RED`)
            .setDescription(`${client.emotes.success} - Loop mode **disabled**!`)
        const enebeled_embed = new MessageEmbed()
            .setTitle('Loop mode')
            .setColor(`GREEN`)
            .setDescription(`${client.emotes.success} - Loop mode **enabled** the whole queue will be repeated endlessly!`)
        const error_embed = new MessageEmbed()
            .setTitle(`Error`)
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - You are not in the same voice channel !`)
        if (!message.member.voice.channel) return message.channel.send(error_embed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error_embed);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(disabeled_embed);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(enebeled_embed);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(disabeled_embed);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(enebeled_embed);
            };
        };
    },
};