/*
    QNET DISCORD BAN BOT
	~By EramsorGR, part of the NSE Network group.
   
	Protect by an MIT License
	Copyright (c) 2020 Nicholas S.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	  
	For bug reports, features requests and more, please check the GitHub page @ github.com/EramsorGR/qnet-discord-bot
*/

const nodefetch = require('node-fetch');
const Discord = require('discord.js');
const bot = new Discord.Client()
const config = require('./config.json');

//Run this function
checkSettings();

//Login the bot to DiscordApp endpoints
bot.login(config.token);

//Listening for events
bot.on('guildMemberadd', member => {
    //Sending a GET request to the API
    await nodefetch(`https://qnet.quantos.xyz/api/discordBanned?key=${config.key}&id=${member.user.id}`, { method: "GET" })
    .then( (to) => to.json()) //Converting the response to JSON
    .then( async (body) => {  //Waiting for the convertion
        //Checking if there are any errors
        if (body.success === false) return console.log(`Error while accessing the API: ${body.error}`);
        //Checking if the account is authenticated
        if (body.success ===  true && body.authenticated === false) return console.log(`Error while accessing the API. Invalid KEY!`);
        //Checking if the user is banned
        if (body.success === true && banned === true) {
            //Attempting to ban (similar to pcall in Lua)
            try {
                //Kick the user
                member.guild.kick(member.user.id, `[QNET] User banned from the QNET network.`);
                return;
            //Handle errors
            } catch (err) {
                console.log(`Error while trying to kick ${member.user.username} (${member.user.id}): ${err}`)
            }
        };
    });
});


//The bellow function check wether all values from the settings file exists and are not to the default values
function checkSettings() {
    if (!config) {
        console.log('WARNING, MISSING CONFIG FILE. EXITING PROCESS!');
        process.exit(0);
    };
    if (!config.token || !config.key) {
        console.log('WARNING, MISSING CONFIG TOKEN OR KEY VALUES. EXITING PROCESS!');
        process.exit(0);
    };
    if (config.token === "INSERT THE BOT TOKEN IN THIS FIELD") {
        console.log('WARNING, USING DEFAULT BOT TOKEN. EXITING PROCESS!');
        process.exit(0);
    };
    if (config.token === "INSERT THE GROUP KEY IN THIS FIELD") {
        console.log('WARNING, USING DEFAULT GROUP KEY. EXITING PROCESS!');
        process.exit(0);
    };
};
