const Discord = require('discord.js');
const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'EggMan') {
    	message.reply('Pingas');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

