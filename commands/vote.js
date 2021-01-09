const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'vote',
    description: 'vote fro cydbot',
    async execute(client, message, args) {
        const voteembed = new MessageEmbed()
        .setTitle(`Vote for Cydbot:`)
        .setDescription(`here are all the places in that you can vote for CydBot:`)
        .addField(`Top.gg: `, `temporarily unavalible`)
        .addField(`discordbotlist.com:`, `[click here](https://discordbotlist.com/bots/cydbot/upvote)`)
        .addField(`motiondevelopment.top:` ,`[click here](https://www.motiondevelopment.top/bots/780118082073001985/vote)`)
        .setTimestamp()
        .setColor(`RANDOM`)
        message.channel.send(voteembed)
    }}