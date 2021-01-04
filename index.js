const Discord = require('discord.js')
const fs = require('fs')
const { TOKEN} = require('./config.json');
const { MessageEmbed } = require("discord.js");
const api = require('covidapi');
const { Player } = require('discord-player');
const api1 = require('imageapi.js');
const { discord } = require('./config');
const { join } = require('path');
const mongoose = require('mongoose')
const Prefix = require('./models/prefix');
const prefix = require('./models/prefix');


const client = new Discord.Client({disableMentions:'everyone'});
client.player = new Player(client);
client.config = require('./config');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Discord.Collection();
mongoose.connect('mongodb+srv://Pol:OXiWFLE8Cs0PI7L7@cluster1.eaomb.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    //console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    //console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on("guildCreate", (guild) => {
    // This event triggers when the bot joins a guild.
    const log_guild = client.guilds.cache.get("792507128795103263");
    const log_channel = log_guild.channels.cache.get("794914507050713098");
    const joinembed = new MessageEmbed()
        .setColor(`GREEN`)
        .setTitle(`I have been added to a guild!`)
        .setDescription(`**name**: ${guild.name} \n **guildID**: ${guild.id} \n **memebercount**: ${guild.memberCount}`)
    log_channel.send(joinembed);
});
client.on('guildDelete', (guild) => {
    const log_guild = client.guilds.cache.get("792507128795103263");
    const log_channel = log_guild.channels.cache.get("794914507050713098");
    const leaveembed = new MessageEmbed()
        .setColor(`RED`)
        .setTitle(`I have been removed from a guild!`)
        .setDescription(`**name**: ${guild.name} \n **guildID**: ${guild.id} \n **memebercount**: ${guild.memberCount}`)
    log_channel.send(leaveembed);
})
client.on('message', async (message) => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.reply('CydBot doesn\'t currently support dm commands. Please use this command in a server');
    //prefix:
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
    const ping_embed = new MessageEmbed()
    .setAuthor(client.user.tag, client.user.avatarURL({dynamic : true}))
    .setTitle(`Hello there!`)
    .setDescription(`My prefix is \`\`${prefix_1}\`\`, for help type \`\`${prefix_1}help\`\`!`)
    .setColor(`GREEN`) 
    if (message.mentions.has(client.user.id)) {
        message.channel.send(ping_embed);
};

    if(!message.content.startsWith(prefix_1)) return;

    if (message.content.indexOf(prefix_1) !== 0) return;

    const args = message.content.slice(prefix_1.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args)
})

client.login(TOKEN);