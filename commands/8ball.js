const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',
    description: 'answers to questions',
    async execute(client, message, args) {
        message.delete().catch(O_o=>{});
    const prefix = '.'
let question = message.content.slice(prefix.length+6)
if(!question){
  return message.reply("you need to ask a question")
}
else{
  let responses = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it."
  ]
  let answer = responses[Math.floor(Math.random()*(responses.length))]
  let Embed = new MessageEmbed()
    .setTitle("8Ball")
    .setColor(`RANDOM`)
    .addField("question: ", `${question}\n`)
    .addField("my answer:", answer)
    .setThumbnail("https://cdn.discordapp.com/attachments/667751701843017729/779251275988205608/hiclipart.png")
    .setFooter(`${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
  message.channel.send(Embed)
}
    }}