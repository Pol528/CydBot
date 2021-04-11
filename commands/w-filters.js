const mongoose = require('mongoose')
const Prefix = require('../models/prefix');

module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',
    

    async execute(client, message) {

        mongoose.connect('YOUR MONGODB CONNECTION HERE', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const data = await Prefix.findOne({
        GuildID: message.guild.id
    });
    var prefix_1 = 'tati'
    if(data) {
         prefix_1 = data.Prefix;
    } else if (!data) {
        //set the default prefix here
         prefix_1 = ".";
    }

        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: 'Thank you to Zerio for the music part of CydBot' },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${prefix_1}filter\` to add a filter to a song.`,
            },
        });
    },
};