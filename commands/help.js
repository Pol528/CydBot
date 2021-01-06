const { Discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ping = require("./ping");
const mongoose = require('mongoose')
const Prefix = require('../models/prefix');



module.exports = {
    name: 'help',
    description: 'help menu',
    async execute(client, message, args) {
    const category = args.join(" ");
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
    if(!category)
    {
        const help_embed = new MessageEmbed()
           .setTitle('__Help__📖')
           .setColor(`PURPLE`)
           .setDescription('these are all the categories of help:')
           .addField(`\`\`${prefix_1}help general\`\`:computer:`, 'general help')
           .addField(`\`\`${prefix_1}help music\`\`🎵`, 'music commands help')
           .addField(`\`\`${prefix_1}help moderation\`\` :hammer:`, 'only for staff')
           .addField(`\`\`${prefix_1}settings\`\` ⚙️`, 'configure server settings')
           .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
           .setFooter(`my prefix is \"${prefix_1}\", use \"${prefix_1}prefix [new perfix]\" to change it`)
        const beg_embed = new MessageEmbed()
            .setTitle(`Want to help support CydBot?`)
            .setDescription(`😊 Please [vote for CydBot on top.gg](https://top.gg/bot/780118082073001985)`)
            .setColor(12320855)
        return message.channel.send(help_embed), message.channel.send(beg_embed);
    }
    if(category === 'general')
    {
        const general_help_embed = new MessageEmbed()
            .setTitle('__General help__💻')
            .setColor(`GREEN`)
            .setDescription('here are my commands:')
            .addField(`\`\`${prefix_1}ping\`\``, 'measures my latency and API latency')
            .addField(`\`\`${prefix_1}meme\`\``, 'posts a meme from [reddit](https://www.reddit.com/)')
            .addField(`\`\`${prefix_1}covid <country>\`\``, 'shows Covid-19 stats')
            .addField(`\`\`${prefix_1}f <@user>\`\``, 'pay respect to someone')
            .addField(`\`\`${prefix_1}avatar <@user>\`\``, `show someone's avatar`)
            .addField(`\`\`${prefix_1}rgb\`\``, 'puts a nice rgb strip in chat')
            .addField(`\`\`${prefix_1}8ball [question]\`\``, 'answers a yes/no question')
            .addField(`\`\`${prefix_1}userinfo <@user>\`\``, 'shows info about a user')
            .addField(`\`\`${prefix_1}serverinfo\`\``, 'shows info about the server')
            .addField(`\`\`${prefix_1}say [message]\`\``, `say a message`)
            .addField(`\`\`${prefix_1}weather [city]\`\``, `shows the weather in that city`)
            .addField(`\`\`${prefix_1}iq <user>\`\``, `shows a random "IQ" number`)
            .addField(`\`\`${prefix_1}credits\`\``, "a list of everyone who helped with this project")
            .addField(`\`\`${prefix_1}inivte\`\``, 'to invite CydBot to your server')
            .addField(`need more help?`, `[join our support server](https://discord.gg/DF4traRyXx)`)
            .setFooter('arguments: <optional>, [mandatory]')
            
        return message.channel.send(general_help_embed);
    }
    if(category === "moderation")
    {
        const moderation_help_embed = new MessageEmbed()
            .setTitle('__Moderation help__🔨')
            .setDescription('here are my moderation commands:')
            .setColor(`BLUE`)
            .addField(`\`\`${prefix_1}kick [@user] <reason>\`\``, "kick a user from the server")
            .addField(`\`\`${prefix_1}ban [@user] <Reason>\`\``, "ban a user from the server")
            .addField(`\`\`${prefix_1}unban [user id]\`\``, 'unban someone from the server')
            .addField(`\`\`${prefix_1}mute [@member] <time> <type of time(M for minutes, H for hours , D for days)>\`\``, `mute someone`)
            .addField(`\`\`${prefix_1}unmute [@member]\`\``, `unmute a muted member`)
            .addField(`\`\`${prefix_1}purge [2-100]\`\``, `deletes messages`)
            .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
            .setFooter('arguments: <optional>, [mandatory]')
        return message.channel.send(moderation_help_embed);
    }
    if(category === "music")
    {
        const music_help_embed = new MessageEmbed()
            .setTitle('__Music help__🎵')
            .setDescription('thank you to [ZerioDev](https://github.com/ZerioDev) for the [music part](https://github.com/ZerioDev/Music-bot)!\n music commands:')
            .addField(`\`\`${prefix_1}play [name/URL]\`\``, 'play music in a voice channel')
            .addField(`\`\`${prefix_1}search [name]\`\``, `open a panel to choose a music and then play it`)
            .addField(`\`\`${prefix_1}pause\`\``, `pause the current music`)
            .addField(`\`\`${prefix_1}resume\`\``, `puts the current music back on`)
            .addField(`\`\`${prefix_1}queue\`\``, `see the next songs`)
            .addField(`\`\`${prefix_1}clear-queue\`\``, `remove music in the queue`)
            .addField(`\`\`${prefix_1}shuffle\`\``, `to mix the queue`)
            .addField(`\`\`${prefix_1}nowplaying\`\``, `see music in progress`)
            .addField(`\`\`${prefix_1}loop\`\``, `to enable or disable the repeat function`)
            .addField(`\`\`${prefix_1}volume [1 - 100]\`\``, `change the volume`)
            .addField(`\`\`${prefix_1}skip\`\``, `skip to next music`)
            .addField(`\`\`${prefix_1}stop\`\``, `stop all music`)
            .addField(`\`\`${prefix_1}w-filters\`\``, `see all filters`)
            .addField(`\`\`${prefix_1}filter [filter]\`\``, `add/remove filter`)
            .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
            .setColor(`ORANGE`)
            .setFooter('arguments: <optional>, [mandatory]')
        message.channel.send(music_help_embed)
    }
    else
    {
        return message.reply('unknown category!')
    }

        
}};