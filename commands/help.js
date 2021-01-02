const { Discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ping = require("./ping");

module.exports = {
    name: 'help',
    description: 'help menu',
    execute(client, message, args) {
    const category = args.join(" ");
    if(!category)
    {
        const help_embed = new MessageEmbed()
           .setTitle('__Help__📖')
           .setColor(`PURPLE`)
           .setDescription('these are all the categories of help:')
           .addField('\`\`.help general\`\`:computer:', 'general help')
           .addField(`\`\`.help music\`\`🎵`, 'music commands help')
           .addField('\`\`.help moderation\`\` :hammer:', 'only for staff')
           .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
           .setFooter('my prefix is \".\"')
        return message.channel.send(help_embed);
    }
    if(category === 'general')
    {
        const general_help_embed = new MessageEmbed()
            .setTitle('__General help__💻')
            .setColor(`GREEN`)
            .setDescription('here are my commands:')
            .addField('\`\`.ping\`\`', 'measures my latency and API latency')
            .addField('\`\`.meme\`\`', 'posts a meme from [r/dankmemes](https://www.reddit.com/r/dankmemes/)')
            .addField('\`\`.covid <country>\`\`', 'shows Covid-19 stats')
            .addField('\`\`.f <@user>\`\`', 'pay respect to someone')
            .addField('\`\`.avatar <@user>\`\`', `show someone's avatar`)
            .addField('\`\`.rgb\`\`', 'puts a nice rgb strip in chat')
            .addField('\`\`.8ball [question]\`\`', 'answers a yes/no question')
            .addField('\`\`.userinfo <@user>\`\`', 'shows info about a user')
            .addField('\`\`.serverinfo\`\`', 'shows info about the server')
            .addField('\`\`.say [message]\`\`', `say a message`)
            .addField('\`\`.credits\`\`', "a list of everyone who helped with this project")
            .addField('\`\`.inivte\`\`', 'to invite CydBot to your server')
            .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
            .setFooter('arguments: <optional>, [mandatory]')
            
        return message.channel.send(general_help_embed);
    }
    if(category === "moderation")
    {
        const moderation_help_embed = new MessageEmbed()
            .setTitle('__Moderation help__🔨')
            .setDescription('here are my moderation commands:')
            .setColor(`BLUE`)
            .addField('\`\`.kick [@user] <reason>\`\`', "kick a user from the server")
            .addField('\`\`.ban [@user] <Reason>\`\`', "ban a user from the server")
            .addField('\`\`.unban [user id]\`\`', 'unban someone from the server')
            .addField(`\`\`.mute [@member] <time in ms>\`\``, `mute someone`)
            .addField(`\`\`.unmute [@member]\`\``, `unmute a muted member`)
            .addField(`\`\`.purge [2-100]\`\``, `deletes messages`)
            .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
            .setFooter('arguments: <optional>, [mandatory]')
        return message.channel.send(moderation_help_embed);
    }
    if(category === "music")
    {
        const music_help_embed = new MessageEmbed()
            .setTitle('__Music help__🎵')
            .setDescription('thank you to [ZerioDev](https://github.com/ZerioDev) for the [music part](https://github.com/ZerioDev/Music-bot)!\n music commands:')
            .addField(`\`\`.play [name/URL]\`\``, 'play music in a voice channel')
            .addField(`\`\`.search [name]\`\``, `open a panel to choose a music and then play it`)
            .addField(`\`\`.pause\`\``, `pause the current music`)
            .addField(`\`\`.resume\`\``, `puts the current music back on`)
            .addField(`\`\`.queue\`\``, `see the next songs`)
            .addField(`\`\`.clear-queue\`\``, `remove music in the queue`)
            .addField(`\`\`.shuffle\`\``, `to mix the queue`)
            .addField(`\`\`.nowplaying\`\``, `see music in progress`)
            .addField(`\`\`.loop\`\``, `to enable or disable the repeat function`)
            .addField(`\`\`.volume [1 - 100]\`\``, `change the volume`)
            .addField(`\`\`.skip\`\``, `skip to next music`)
            .addField(`\`\`.stop\`\``, `stop all music`)
            .addField(`\`\`.w-filters\`\``, `see all filters`)
            .addField(`\`\`.filter [filter]\`\``, `add/remove filter`)
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