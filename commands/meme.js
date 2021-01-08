const { MessageEmbed } = require("discord.js");
const api1 = require('imageapi.js');

module.exports = {
    name: 'meme',
    description: 'post a meme',
    async execute(client, message, args) {

try{
  let subreddits = [
    "dankmemes",
    "memes"
  ]
  let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
  let img = await api1.advanced(subreddit, 'top')
  const upvoteemoji = client.emojis.cache.get("797012162009890817")
  const downvoteemoji  = client.emojis.cache.get("797012187885338666");
  const { title } = img
  const pol123 = new MessageEmbed()
  .setAuthor(`${message.author.tag}` ,`${message.author.avatarURL({dynamic : true})}`)
  //pol123.setTitle(`a meme from r/${subreddit}`)
  .setURL(`https://www.reddit.com/r/${subreddit}`)
  .setColor(`RANDOM`)
  .setTitle(`${title}`)
  .setImage(img.img)
  .setDescription(`${upvoteemoji}${img.upvotes} ${downvoteemoji}${img.downvotes}`)
  .setFooter(`meme from r/${subreddit}`)
  .setTimestamp()
  message.channel.send(pol123).then(async message => {
    await message.react("797012162009890817")
    await message.react("797012187885338666")
    })
} catch(err) {
  message.channel.send(`There was an error, please try again`)
}
  }}