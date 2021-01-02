const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please specify a valid filter to enable or disable !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - This filter doesn't exist, type \`\`.w-filters\`\` to view all the filters!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        const filter_embed_add = new MessageEmbed()
            .setTitle('adding filter')
            .setDescription(`${client.emotes.music} - I'm **adding** the filter to the music, please wait...`)
            .setFooter(`Note : the longer the music is, the longer this will take.`)
            .setColor(`GREEN`)

        const filter_embed_remove = new MessageEmbed()
            .setTitle('removing filter')
            .setDescription(`${client.emotes.music} - I'm **disabling** the filter on the music, please wait...`)
            .setFooter(`Note : the longer the music is, the longer this will take.`)
            .setColor(`RED`)

        if (filtersUpdated[filterToUpdate]) message.channel.send(filter_embed_add);
        else message.channel.send(filter_embed_remove);
    },
};