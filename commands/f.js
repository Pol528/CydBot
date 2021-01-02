const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'f',
    description: 'pay respects to someone',
    async execute(client, message, args) {
        let member1 = message.mentions.members.first();
if(!member1)
{
  const f = new MessageEmbed()
  .setColor(0xfc03eb)
  .setDescription(`react with 🇫 to pay respect to ${message.author}! `)
  .setImage('https://cdn.discordapp.com/attachments/732888989920526356/760825564352479262/SkeletalDependableAndeancat-size_restricted.gif')
  .setTimestamp()
  message.channel.send(f).then(embedMessage => {
      embedMessage.react("🇫");
    });
}
else
{
const f_ping = new MessageEmbed()
  .setColor(0xfc03eb)
  .setDescription(`react with 🇫 to pay respect to ${member1}! `)
  .setImage('https://cdn.discordapp.com/attachments/732888989920526356/760825564352479262/SkeletalDependableAndeancat-size_restricted.gif')
  .setTimestamp()
  message.channel.send(f_ping).then(embedMessage => {
      embedMessage.react("🇫");
    });
}

    }}
