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
if (message.conent.indexOf("!ban") === 0) {
   var userToBan = message.content.slice(5);
   //userToBan will be the string of what they typed after ban. 
}
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);





