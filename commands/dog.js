const { MessageEmbed } = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: 'dog',
    description: 'shows a random dog',
    execute(client, message, args) {
        superagent.get('https://nekos.life/api/v2/img/woof')
        .end((err, response) => {
      const embed = new MessageEmbed()
      .setTitle("Random dog")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setFooter(`woof`)
      .setURL(`https://www.youtube.com/watch?v=JtA_WnBP_Co`);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... 😢"
            }}));
    }}