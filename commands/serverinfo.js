const Discord = require("discord.js"),
moment = require('moment');


module.exports = {
    name: 'serverinfo',
    description: 'shows info about the server',
    async execute(client, message, args) {
    
      let createDate = await moment(message.guild.createdAt).format('MMMM Do YYYY, HH:mm:ss');

      // Get the amount of text and voice channels
      let textChans = await message.guild.channels.cache.filter(x => x.type === 'text').size;
      let voiceChans = await message.guild.channels.cache.filter(x => x.type === 'voice').size;
      // Get the amount of categories
      let catCount = await message.guild.channels.cache.filter(x => x.type === 'category').size;
      // Get the amount of role
      //let roleCount = await message.guild.roles.cache.size;

      // Get server verification level
      let verifyLevel = await message.guild.verificationLevel.toLowerCase();
      verifyLevel = verifyLevel.charAt(0).toUpperCase() + verifyLevel.slice(1)
      // Get the amount of banned users
      let banCount = await message.guild.fetchBans()
      //roleCount1.delete('<@&588715544623054863>')
      let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
      // Create the embed and add the information
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addFields(
        { name: `Server ID`, value: `${message.guild.id}`, inline: false },
        { name: `Region`, value: message.guild.region, inline: true },
        { name: `Verification Level`, value: verifyLevel, inline: true },
        { name: `Members`, value: message.guild.memberCount, inline: true },
        { name: `Server Owner`, value: `${message.guild.owner} [${message.guild.owner.id}]`, inline: false },
        { name: `Guild Created`, value: createDate, inline: false },
        { name: `Channels [${textChans + voiceChans + catCount}]`, value: `Categories: ${catCount}\n\nText: ${textChans}\nVoice: ${voiceChans}`, inline: true },
        { name: `Roles[${message.guild.roles.cache.size}]`, value: rolemap, inline: true },
        { name: `Bans`, value: banCount.size, inline: false},
        { name: `Server Boosts`, value: `Level: ${message.guild.premiumTier}\nAmount: ${message.guild.premiumSubscriptionCount || 0}` , inline: false },
    	)
      .setColor(`ORANGE`)
      .setTimestamp()

      return message.channel.send(embed);

    }}