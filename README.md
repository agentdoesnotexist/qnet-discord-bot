# Welcome to the QNET Discord Bot Repo.

This repositority is for the Discord Bot that connects to the QNET API and handles users bans. Feel free to install using the instructions below and use it!


### IMPORTANT NOTE

The bot **will not** ban users. It will kick them every time they try to join the server. 

### How to use

- Install [NodeJS 12.16.1](https://nodejs.org/en/download/)
- Download the files from the repo
- Run `npm install`
- While that runs, create a new application at the Discord [Developers Portal](https://discordapp.com/developers/applications)
- Create a bot from the application and copy the **bot toke** __not__ the client ID or secret!
- Follow the configuration information below and continue to the next step
- Download a proccess manager like pm2 or forever (personal recommendation is to use pm2 `npm install -g pm2`)
- If using pm2 start the bot using `pm2 start bot.js --name QNETBot` 
- Enjoy!

### Configuration Setup

The bot uses a config.json JSON storage system to save the Discord Bot token and the group KEY provided by QNET.
Simply open the config.json file with any text editor and edit the said variables. 


### Notes

Feel free to edit this bot and use the code to implement it to your own Discord JS bot. Make sure you have installed node-fetch!
