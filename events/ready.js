module.exports = async (client) => {
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
    console.log("CydBot has started");
	console.log("----------------");
	console.log("Username: " + (client.user.username));
	console.log("Bot ID: " + (client.user.id));

	// display servers
	if(client.guilds.cache.array().length > 0) {
		console.log("Servers:");
		client.guilds.cache.array().forEach( (guild) => {
			console.log(` -${guild.name}`);
		});	
	}

	client.user.setActivity(`.help in ${client.guilds.cache.size} guilds!`, { type: 'LISTENING' });
	function pula(){
		client.user.setActivity(`.help in ${client.guilds.cache.size} guilds!`, { type: 'LISTENING' });	
	}
	client.on("guildCreate", (guild) => {
		pula()
	})
	client.on('guildDelete', (guild) => {
		pula()
	})
};