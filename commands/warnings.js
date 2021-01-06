const warnschema = require('../models/warn-schema')
const mongoose = require('mongoose')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'warnings',
    description: 'see a users warnings',
    async execute(client, message, args) {
        const target = message.mentions.users.first()
        if(!target){ return message.reply('you need to tell me who\'s warnings you want to see')}
        //var guildID = message.guild.id
        const userId = target.id

        mongoose.connect('mongodb+srv://Pol:OXiWFLE8Cs0PI7L7@cluster1.eaomb.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try{
            const results = await warnschema.findOne({
                guildID: message.guild.id,
                userId: target.id
                
            })

            let reply = ``

            if(!results){return message.reply(`${target} has no warnings!`)}
            for (const warning of results.warnings) {
                const{ author, timestamp, reason } = warning
                 reply += `•By ${author} on ${new Date(timestamp).toLocaleDateString()} for "${reason}"\n`
            }
            const Warnongsembed = new MessageEmbed()
                .setColor(`PURPLE`)
                .setDescription(`**Previous warnings for <@${userId}>:**\n\n ${reply}`)
                .setTimestamp()
            message.channel.send(Warnongsembed)  
        } finally{
        }
    }}