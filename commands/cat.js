const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: 'cat',
    description: 'shows a random cat',
    async execute(client, message, args) {
        superagent.get('https://nekos.life/api/v2/img/meow')
        .end((err, response) => {
      const embed = new MessageEmbed()
      .setTitle("Random cat")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`meow`)
      .setURL(`https://www.youtube.com/watch?v=SbyZDq76T74`);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... 😢"
            }}));
    }}