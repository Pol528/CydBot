const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        const title_error = new MessageEmbed()
            .setTitle('Error!')
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - Please indicate the title of a song !`)
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);
        
        if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
            return message.reply('I do not have permissions, please contact an administrator');
        }
        
        if (!args[0]) return message.channel.send(title_error);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};