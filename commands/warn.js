const { MessageEmbed } = require('discord.js');
const { mongo } = require('mongoose');
const mongoose = require('mongoose');
const { db } = require('../models/warn-schema');
const warnschema = require('../models/warn-schema')



module.exports = {
    name: 'warn',
    description: 'warn a user',
    async execute(client, message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply("you can't use that here!"); 
        const target = message.mentions.users.first()
        if(!target){ return message.reply('you need to tell me who to warn!')}
        args.shift()
        const guildID = message.guild.id
        const userId = target.id
        let reason = args.join(' ')
        if(!reason){ return message.reply('you need to provide a reason!')}
        


        const waring = {
            author: message.member.user.tag,
            timestamp: new Date().getTime(),
            reason
        }
        mongoose.connect('mongodb+srv://Pol:OXiWFLE8Cs0PI7L7@cluster1.eaomb.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

                await warnschema.findOneAndUpdate({
                  guildID,
                  userId  
                }, {
                    guildID,
                    userId,
                    $push: {
                        warnings: waring
                    }
                }, {
                    upsert: true
                })
                //mongoose.connection.close()

        const warnembed = new MessageEmbed()
                .setTitle(`✅ - Success`)
                .setDescription(`${target} was warned by ${message.author} for \`\`${reason}\`\`!`)
                .setColor(`GREEN`)
                .setTimestamp()
            message.channel.send(warnembed)
    }}