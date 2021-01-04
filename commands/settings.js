const { MessageEmbed } = require("discord.js");
const mongoose = require('mongoose')
const Prefix = require('../models/prefix');

module.exports = {
    name: 'settings',
    description: 'settings menu',
    async execute(client, message, args) {
        mongoose.connect('mongodb+srv://Pol:OXiWFLE8Cs0PI7L7@cluster1.eaomb.mongodb.net/test', {
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
        const settings_menu = new MessageEmbed()
            .setTitle(`__Settings__ ⚙️`)
            .setColor(`ORANGE`)
            .setDescription(`Here are all my settings: - more to come in the future`)
            .addField(`\`\`${prefix_1}prefix [new prefix]\`\``, `set a new prefix for this server`)
            .setFooter('arguments: <optional>, [mandatory]')
        message.channel.send(settings_menu)
    }}