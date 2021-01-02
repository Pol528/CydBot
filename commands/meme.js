const { MessageEmbed } = require("discord.js");
const api1 = require('imageapi.js');

module.exports = {
    name: 'meme',
    description: 'post a meme',
    async execute(client, message, args) {
  let subreddits = [
    "dankmemes"
  ]
  let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
  let img = await api1(subreddit)
  const pol123 = new MessageEmbed()
  pol123.setTitle(`a meme from r/${subreddit}`)
  .setURL(`https://www.reddit.com/r/${subreddit}`)
  .setColor(`RANDOM`)
  .setImage(img)
  .setFooter(`requested by: ${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}` )
  .setTimestamp()
  message.channel.send(pol123)
    }}