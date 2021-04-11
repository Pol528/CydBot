# CydBot

A multifunctional [discord.js](https://discord.js.org/#/) v12 BOT🤖!

## 📝Requirements:

- a [mongo DB](https://www.mongodb.com/) database
- a [discord BOT](https://discord.com/developers/applications)
- recommended [Node.js](https://nodejs.org/en/) version

## ⚙️Setup:

#### `index.js`:

- in line `21` put your MongoDB auth
- in line `46` and `58` put your bot's support server guild ID
- in line `47` and `59` put your log channel ID
- in line `90` put your BOT's ID

#### `config.json`:

- put your BOT's token

#### `commands/covid.js`:

- in line `11` put your MongoDB auth

#### `commands/help.js`:

- in line `11` put your MongoDB auth

#### `commands/settings.js`:

- in line `9` put your MongoDB auth

#### `commands/w-filters.js`:

- in line `13` put your MongoDB auth

#### `commands/warn.js`:

- in line `30` put your MongoDB auth

#### `commands/warnings.js`:

- in line `14` put your MongoDB auth

## 🌟Starting your BOT:

- in line `21` put your MongoDB auth

- open a terminal and type:

```cmd
npm install
```

- After all the dependencies have been installed, run:

```
node index.js
```

# 🎁CydBot's commands:

All these commands can be seen when using the `.help` command in a server

arguments: \<optional>, [mandatory]

## 🏓 General:

- .ping - measures latency and API latency
- .meme - posts a meme from [reddit](https://www.reddit.com/)
- .covid \<country> - shows Covid-19 stats
- .f \<@user> - pay respect to someone
- .avatar \<@user> - show someone's avatar
- .rgb - puts a nice rgb strip in chat
- .8ball [question] - answers a yes/no question
- .userinfo <@user> - shows info about a user
- .serverinfo - shows info about the server
- .say [message] - say a message
- .weather [city] - shows the weather in that city
- .iq <@user> - shows a random "IQ" number
- .youtube [video name] - show search results from youtube
- .cat - posts a random cat picture
- .dog - posts a random dog picture
- .credits - a list of everyone who helped with this project
- .vote - a list of all the sites where you can vote for CydBot
- .inivte - to invite CydBot to your server

## 🎵 Music:

Thank you to [ZerioDev](https://github.com/ZerioDev) for the [music part](https://github.com/ZerioDev/Music-bot/blob/master/README.md)!

- play \<name/URL> - play music in a voice channel
- search \<name> - open a panel to choose a music and then play it
- pause - pause the current music
- resume - puts the current music back on
- queue - see the next songs
- clear-queue - remove music in the queue
- shuffle - to mix the queue
- nowplaying - see music in progress
- loop - to enable or disable the repeat function
- volume <1 - 100> - change the volume
- skip - skip to next music
- stop - stop all music
- filter \<filter> - add / remove filter
- w-filters - see filters

## 🔨 Moderation:

- .kick [@user] \<reason> - kick a user from the server
- .ban [@user] \<Reason> - ban a user from the server
- .unban [user id] - unban someone from the server
- .softban [@user] - kick someone and delete all their messages
- .mute [@user] \<time> \<type of time(M for minutes, H for hours , D for days)> - mute someone
- .unmute [@user] - unmute a muted member
- .purge [2-100] - deletes messages
- .warn [@user] - warn a user
- .warnings [@user] - see all warnings that a user has

# 💳Credits:

- developer - Pol528#6969/Pol#6969 (i keep changing it for some reason)
- Music part created by [ZerioDev](https://github.com/ZerioDev), you can find it [here](https://github.com/ZerioDev/Music-bot)
- Cydbot profile picture - stole it from somewhere, if you are the creator please dm Pol528#6969!
- got help from Grav#6969, discord.js discord server and stackoverflow.com
- inspiration: Grav#6969 and GravBot#7521😊
- thank you to [IgorKowalczyk](https://github.com/IgorKowalczyk) for some commands!

## 🙋Need more help?

### Join our [support server](https://discord.gg/ZyDqXnrTYX)!
