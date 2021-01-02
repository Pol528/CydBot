const Discord = require('discord.js')
const fs = require('fs')
const { prefix, TOKEN} = require('./config.json');
const { MessageEmbed } = require("discord.js");
const api = require('covidapi');
const { Player } = require('discord-player');
const api1 = require('imageapi.js');


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
};//

client.login(TOKEN);