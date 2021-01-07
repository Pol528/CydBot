const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: 'hug',
    description: 'hug someone',
    async execute(client, message, args) {
        const user = message.mentions.users.first();
        if(!user)
            return message.channel.send({embed: {
            color: 16734039,
            description: "You must mention someone to give hug!"
        }})
    if (message.author === user) {
       return await message.channel.send({embed: {
            color: 16734039,
            description: "You cant hug yourself!"
        }})
    }
        superagent.get('https://nekos.life/api/v2/img/hug')
            .end((err, response) => {
          const embed = new MessageEmbed()
          //.setTitle(user.username + " Just got a hug from " + message.author.username)
          .setImage(response.body.url)
          .setColor(12320855)
          .setDescription((message.author.toString() + " hugs " + user.toString()))
          .setTimestamp()
          .setURL(response.body.url);
      message.channel.send(embed);
        }).catch((err) => message.channel.send({embed: {
            color: 16734039,
            description: "Something went wrong... 😢"
        }}));
    }}