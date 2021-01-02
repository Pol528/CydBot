const Discord = require('discord.js')
const fs = require('fs')
const { prefix, TOKEN} = require('./config.json');
const { MessageEmbed } = require("discord.js");
const api = require('covidapi');
const { Player } = require('discord-player');
const api1 = require('imageapi.js');
const { discord } = require('./config');
const { join } = require('path');


const client = new Discord.Client({disableMentions:'everyone'});
client.player = new Player(client);
client.config = require('./config');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Discord.Collection();

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

client.login(TOKEN);