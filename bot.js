const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hello! Im Tails Your Assistant. Commands ```Tails hi```');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails hi') {
    	message.reply('hi');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);





