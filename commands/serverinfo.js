const Discord = require("discord.js"),
moment = require('moment');


module.exports = {
    name: 'serverinfo',
    description: 'shows info about the server',
    async execute(client, message, args) {
      let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
		    "europe": ":flag_eu: Europe",
		    "india": ":flag_in: India",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      //emojis:
      const boostemoji = client.emojis.cache.get("797174231904288778")
      const voiceemoji = client.emojis.cache.get("797174231330848808")
      const textemoji = client.emojis.cache.get("797174231275667476")
      const onlineemoji = client.emojis.cache.get("797174231208296510")
      const offlineemoji = client.emojis.cache.get("797174231224942602")
      const baneemoji = client.emojis.cache.get("797174231141842964")
      const botemoji = client.emojis.cache.get("797180009227223130")

       message.guild.members.fetch({cache: true})
      await message.guild.members.fetch(message.guild.ownerID) // Fetches owner
      .then(guildMember => owner = guildMember)

      let onlinemembers = message.guild.members.cache.filter(member => member.presence.status !== "offline").size
      let offflinemembes = message.guild.members.cache.filter(member => member.presence.status == "offline").size
      let botcount = message.guild.members.cache.filter(member => member.user.bot).size
    
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
            if (rolemap.length > 1024) rolemap = "\`\`To many roles to display\`\`";
            if (!rolemap) rolemap = "No roles";
      // Create the embed and add the information
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addFields(
        { name: `Guild Created`, value: `\`\`${createDate}\`\``, inline: true },
        { name: `Server ID`, value: `\`\`${message.guild.id}\`\``, inline: false },
        { name: `Region`, value: `${region[message.guild.region]}` || `\`\`${message.guild.region}\`\``, inline: true },
        { name: `Verification Level`, value: `\`\`${message.guild.verificationLevel}\`\``, inline: true },
        { name: `Server Owner`, value: `<@${owner.id}> [\`\`${owner.id}\`\`]`, inline: true },
        { name: `Channels [\`\`${textChans + voiceChans }\`\`]`, value: `Categories: \`\`${catCount}\`\`\n\n${textemoji}Text: \`\`${textChans}\`\`\n${voiceemoji}Voice: \`\`${voiceChans}\`\``, inline: true },
        { name: `Members`, value: `\`\`${message.guild.memberCount}\`\`\n\n${onlineemoji}online: \`\`${onlinemembers}\`\`\n ${offlineemoji}offline: \`\`${offflinemembes}\`\`\n${botemoji}bots: \`\`${botcount}\`\`\n **Bans:**\n${baneemoji}\`\`${banCount.size}\`\``, inline: true },
        { name: `Roles[\`\`${message.guild.roles.cache.size}\`\`]`, value: rolemap, inline: true },
        { name: `${boostemoji}Server Boosts`, value: `Level: \`\`${message.guild.premiumTier}\`\`\nAmount: \`\`${message.guild.premiumSubscriptionCount || 0}\`\`` , inline: true },
        //{ name: `Bans`, value: `\n\n              ${baneemoji}\`\`${banCount.size}\`\``, inline: true},
    	)
      .setColor(`ORANGE`)
      .setTimestamp()

      return message.channel.send(embed);

    }}