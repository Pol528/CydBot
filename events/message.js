module.exports = (client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.reply('CydBot doesn\'t currently support dm commands. Please use this command in a server');
    const prefix = '.';
    if (!message.content.startsWith(prefix)) return;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args)
};