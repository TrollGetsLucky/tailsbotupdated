const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hello! Im Tails Your Assistant. Commands Prefix ```Tails``` or Full Commands list athttps://tailsbot.blogspot.com/2018/02/blog-post.html');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails hi') {
    	message.reply('hi');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails list classic sonic games') {
    	message.reply('Sonic 1, Sonic 2, Sonic CD, Sonic 3, Sonic And Knuckles, Sonic 3 & Knuckles');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails list modern day classic sonic games') {
    	message.reply('Sonic Mania');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails are you gay') {
    	message.reply('No');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails can you watch videos') {
    	message.reply('No');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails Revive Chat') {
    	message.reply(':tophat: With The Power Of Chaos Emeralds I Revive Chat :tophat:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);





