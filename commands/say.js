const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'say',
    discription: 'say something',
    execute(client, message, args) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        const say_embed = new MessageEmbed()
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({dynamic : true})}`)
            .setColor(`BLUE`)
            .setDescription(sayMessage)
        message.channel.send(say_embed)

    }}