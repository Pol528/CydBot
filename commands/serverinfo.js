const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    description: 'shows info about the server',
    async execute(client, message, args) {
    
        const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new MessageEmbed()
      .setTitle(`__${name}:__`)
      .setDescription(`**server info:**`)
      .setThumbnail(icon)
      .setColor(`RANDOM`)
      .addFields(
        {
          name: 'Region:',
          value: region,
        },
        {
          name: 'Members:',
          value: memberCount,
        },
        {
          name: 'Owner:',
          value: message.guild.owner,
        },
        {
          name: 'AFK Timeout:',
          value: afkTimeout / 60,
        },
        {
            name: 'Emoji number:',
            value: message.guild.emojis.cache.size
        }
      )

    message.channel.send(embed)
    
    }}