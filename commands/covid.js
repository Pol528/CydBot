const api = require('covidapi');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'covid',
    description: 'Covid-19 stats',
    async execute(client, message, args) {
        if(message.content === '.covid') {
            const data = await api.all()
            const covidembed = new MessageEmbed()
            .setTitle('__Covid-19 in the whole world__ 🦠')
            .setColor('RED')
            .addField("total cases:", data.cases, true)
            .addField("active cases:", data.active, true)
            .addField("new cases:", data.todayCases, true)
            .addField("cases in critical state", data.critical, true)
            .addField("deaths:", data.deaths, true)
            .addField("recovered:", data.recovered, true)
            .setDescription(`well wishes from the CydBot team😷`)
            .setTimestamp()
            message.channel.send(covidembed)
    }
    else if(message.content.startsWith(".covid")) {
        var prefix = "."
        const countrycovid = message.content.slice(prefix.length).split(' ')
        const countrydata = await api.countries({country: countrycovid})
        
        if(!countrydata.cases)
            return message.reply("that is an invalid country, are you sure you spelled it right?")

        const countryembed = new MessageEmbed()
        .setTitle(`__Covid-19 cases in ${countrycovid[1]}__ 🦠`)
        .setColor('RED')
        .addField("total cases:", countrydata.cases, true)
        .addField("active cases:", countrydata.active, true)
        .addField("new cases:", countrydata.todayCases, true)
        .addField("cases in critical state:", countrydata.critical, true)
        .addField("deaths:", countrydata.deaths, true)
        .addField("recovered:", countrydata.recovered, true)
        .setDescription(`well wishes from the CydBot team😷`)
        .setTimestamp()
        message.channel.send(countryembed)
    }
    }}