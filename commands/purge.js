module.exports = {
    name: 'purge',
    description: 'purge messages',
    async execute(client, message, args) {
if(!message.member.hasPermission('MANAGE_MESSAGES'))
  return message.reply("you can't use that here!");
// This command removes all messages from all users in the channel, up to 100.

// get the delete count, as an actual number.
const deleteCount = parseInt(args[0], 10);

// Ooooh nice, combined conditions. <3
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("you need to tell me how many messages to delete(from 2 to 100)");

// So we get our messages, and delete them. Simple enough, right?
const fetched = await message.channel.messages.fetch({limit: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Error: ${error}`));
    }}