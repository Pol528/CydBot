const mongoose = require('mongoose')

const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
const Prefix = require('../models/prefix');

module.exports = {
    name: 'help',
    description: 'show help',
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
        if(!args[0]){
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
                name: 'main',
                content: new MessageEmbed({
                    title: '__Help__📖',
                    fields: [
                        {
                            name: `\`\`${prefix_1}help general\`\`:computer:`,
                            value: "general help"
                        },
                        {
                            name: `\`\`${prefix_1}help music\`\`🎵`,
                            value: "music commands help"
                        },
                        {
                            name: `\`\`${prefix_1}help moderation\`\` :hammer:`,
                            value: 'only for staff'
                        },
                        {
                            name: `\`\`${prefix_1}settings\`\` ⚙️`,
                            value: 'configure server settings'
                        },
                        {
                            name: 'need more help?',
                            value: `[join our support server](https://discord.gg/DF4traRyXx)`
                        }
                    ],
                    description: `my prefix is \"${prefix_1}\", use \"${prefix_1}prefix [new perfix]\" to change it`,
                    footer: {text: `or react below:`},
                    color:  `PURPLE`
                }),
                reactions: {
                    '💻': 'general',
                    '🎵': 'music',
                    '🔨': 'moderation',
                    '⚙️': 'settings'
                }
            },
            {
                name: 'general',
                content: new MessageEmbed()
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
                .addField(`\`\`${prefix_1}say [message]\`\` - temporarily disabled`, `say a message`)
                .addField(`\`\`${prefix_1}weather [city]\`\``, `shows the weather in that city`)
                .addField(`\`\`${prefix_1}iq <@user>\`\``, `shows a random "IQ" number`)
                .addField(`\`\`${prefix_1}youtube [video name]\`\``, `show search results from youtube`)
                .addField(`\`\`${prefix_1}cat\`\``, `posts a random cat picture`)
                .addField(`\`\`${prefix_1}dog\`\``, `posts a random dog picture`)
                .addField(`\`\`${prefix_1}credits\`\``, "a list of everyone who helped with this project")
                .addField(`\`\`${prefix_1}vote\`\`` , `a list of all the sites where you can vote for CydBot`)
                .addField(`\`\`${prefix_1}inivte\`\``, 'to invite CydBot to your server')
                .addField(`need more help?`, `[join our support server](https://discord.gg/DF4traRyXx)`)
                .setFooter('arguments: <optional>, [mandatory]'),
                reactions: {
                }
            },
            {
                name: 'music',
                content: new MessageEmbed()
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
                .setFooter('arguments: <optional>, [mandatory]'),
                reactions: {
                }
            },
            {
                name: 'moderation',
                content: new MessageEmbed()
                .setTitle('__Moderation help__🔨')
                .setDescription('here are my moderation commands:')
                .setColor(`BLUE`)
                .addField(`\`\`${prefix_1}kick [@user] <reason>\`\``, "kick a user from the server")
                .addField(`\`\`${prefix_1}ban [@user] <Reason>\`\``, "ban a user from the server")
                .addField(`\`\`${prefix_1}unban [user id]\`\``, 'unban someone from the server')
                .addField(`\`\`${prefix_1}softban [@user]\`\``, 'kick someone and delete all their messages')
                .addField(`\`\`${prefix_1}mute [@user] <time> <type of time(M for minutes, H for hours , D for days)>\`\``, `mute someone`)
                .addField(`\`\`${prefix_1}unmute [@user]\`\``, `unmute a muted member`)
                .addField(`\`\`${prefix_1}purge [2-100]\`\``, `deletes messages`)
                .addField(`\`\`${prefix_1}warn [@user]\`\``, `warn a user`)
                .addField(`\`\`${prefix_1}warnings [@user]\`\``,`see all warnings that a user has` )
                .addField('need more help?', `[join our support server](https://discord.gg/DF4traRyXx)`)
                .setFooter('arguments: <optional>, [mandatory]'),
                reactions: {
                }
            },
            {
                name: 'settings', 
                content: new MessageEmbed()
                .setTitle(`__Settings__ ⚙️`)
                .setColor(`ORANGE`)
                .setDescription(`Here are all my settings: - more to come in the future`)
                .addField(`\`\`${prefix_1}prefix [new prefix]\`\``, `set a new prefix for this server`)
                .setFooter('arguments: <optional>, [mandatory]'),
                reactions: {
                }
            }
        ], 300000)

        /* Run Menu.start() when you're ready to send the menu in chat.
         * Once sent, the menu will automatically handle everything else.
         */ 
        helpMenu.start()

        /* The menu also has a singular event you can use for, well, whatever you like.
         * The "pageChange" event fires just before a new page is sent. You can use
         * this to edit pages on the fly, or run some other logic.
         * It's your menu, man, do whatever.
         * 
         * The "destination" is the Page object it's about to change to.
         */
        helpMenu.on('pageChange', destination => {
        })
    } else{
        const category = args.join(" ");
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
                .addField(`\`\`${prefix_1}say [message]\`\` - temporarily disabled`, `say a message`)
                .addField(`\`\`${prefix_1}weather [city]\`\``, `shows the weather in that city`)
                .addField(`\`\`${prefix_1}iq <@user>\`\``, `shows a random "IQ" number`)
                .addField(`\`\`${prefix_1}youtube [video name]\`\``, `show search results from youtube`)
                .addField(`\`\`${prefix_1}cat\`\``, `posts a random cat picture`)
                .addField(`\`\`${prefix_1}dog\`\``, `posts a random dog picture`)
                .addField(`\`\`${prefix_1}credits\`\``, "a list of everyone who helped with this project")
                .addField(`\`\`${prefix_1}vote\`\`` , `a list of all the sites where you can vote for CydBot`)
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
                .addField(`\`\`${prefix_1}softban [@user]\`\``, 'kick someone and delete all their messages')
                .addField(`\`\`${prefix_1}mute [@user] <time> <type of time(M for minutes, H for hours , D for days)>\`\``, `mute someone`)
                .addField(`\`\`${prefix_1}unmute [@user]\`\``, `unmute a muted member`)
                .addField(`\`\`${prefix_1}purge [2-100]\`\``, `deletes messages`)
                .addField(`\`\`${prefix_1}warn [@user]\`\``, `warn a user`)
                .addField(`\`\`${prefix_1}warnings [@user]\`\``,`see all warnings that a user has` )
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
    }
    }}