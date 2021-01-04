const { MessageEmbed } = require('discord.js');
const prefixModel = require('../models/prefix')

module.exports = {
    name: 'prefix',
    discription: 'change the prefix',
    async execute(client, message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR'))
            return message.reply("you can't use that here!");

        const data = await prefixModel.findOne({
            GuildID: message.guild.id
        });
        var prefix_1 = 'tati'
        if(data) {
             prefix_1 = data.Prefix;
        } else if (!data) {
            //set the default prefix here
             prefix_1 = ".";
        }
        const no_args_embed = new MessageEmbed()
            .setColor(`BLUE`)
            .setDescription(`My prefix for this server is \`\`${prefix_1}\`\`\n to set a new prefix use: \`\`${prefix_1}prefix [new prefix]\`\``)
        if (!args[0]) return message.channel.send(no_args_embed);
        const to_long = new MessageEmbed()
            .setTitle(`Error`)
            .setColor(`YELLOW`)
            .setDescription(`${client.emotes.error} - Your new prefix must be under \`5\` characters!`)
    
        if (args[0].length > 5) return message.channel.send(to_long)

        const new_prefix = new MessageEmbed()
            .setColor(`GREEN`)
            .setDescription(`${client.emotes.success} - The new prefix is now **\`${args[0]}\`**`)
    
        if (data) {
            await prefixModel.findOneAndRemove({
                GuildID: message.guild.id
            })
            
            message.channel.send(new_prefix);
    
            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        } else if (!data) {
            message.channel.send(new_prefix);
    
            let newData = new prefixModel({
                Prefix: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        }
    }}