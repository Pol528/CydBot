const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'iq',
    description: 'calculate iq',
    async execute(client, message, args) {


    let iq = Math.floor(Math.random() * 150);
    const memeber = message.mentions.members.first()
    if(!memeber){
      if(message.author.id === '478493146032898068')
      iq = 99999999999
    const embed = new MessageEmbed()
      .setTitle(":brain: IQ Test:")
      .setDescription(":bulb: " + `<@${message.author.id}>` + " IQ: `" + iq + "`")
      .setColor(`RANDOM`)
      .setTimestamp()
    message.channel.send(embed);
    }
    else{
      if(memeber.id === '478493146032898068')
      iq = 9999999999
        const embed_ping = new MessageEmbed()
        .setTitle(":brain: IQ Test:")
        .setDescription(":bulb: " + `<@${memeber.id}>` + " IQ: `" + iq + "`")
        .setColor(`RANDOM`)
        .setTimestamp()
    message.channel.send(embed_ping)
    }
    }}