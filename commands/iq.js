const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'iq',
    description: 'calculate iq',
    async execute(client, message, args) {


    let iq = Math.floor(Math.random() * 150);
    const memeber = message.mentions.members.first()
    if(!memeber){
    const embed = new MessageEmbed()
      .setTitle(":brain: IQ Test:")
      .setDescription(":bulb: " + `<@${message.author.id}>` + " IQ: `" + iq + "`")
      .setColor(`RANDOM`)
      .setTimestamp()
    message.channel.send(embed);
    }
    else{
        const embed_ping = new MessageEmbed()
        .setTitle(":brain: IQ Test:")
        .setDescription(":bulb: " + `<@${memeber.id}>` + " IQ: `" + iq + "`")
        .setColor(`RANDOM`)
        .setTimestamp()
    message.channel.send(embed_ping)
    }
    }}