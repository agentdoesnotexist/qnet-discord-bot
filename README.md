# QNET Discord Bot

The Discord Bot that connects to the QNET API and handles users bans.


### IMPORTANT NOTE

The bot **will not** ban users. It will kick them every time they try to join the server. 

### How to use

- Install [NodeJS 12.16.1](https://nodejs.org/en/download/)
- Download the files from the repo
- Run `npm install`
- While that runs, create a new application at the Discord [Developers Portal](https://discordapp.com/developers/applications)
- Create a bot from the application and copy the **bot toke** __not__ the client ID or secret!
- Place the token inside the config.json token field. 
- Download a proccess manager like pm2 or forever (personal recommendation is to use pm2 `npm install -g pm2`)
- If using pm2 start the bot using `pm2 start bot.js --name QNETBot` 
- Enjoy!
