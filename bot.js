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
client.on('message', message => {
    if (message.content === 'Tails are you shit') {
    	message.reply('no');
  	}
});
client.on('message', message => {
    if (message.content === 'Hi Tails') {
    	message.reply('hi');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails why do you follow sonic') {
    	message.reply('we are friends');
  	}
});
lastCommands = [], limit = 5;

function handleCommand( timeObj, action ) {
    if ( lastCommands.length < limit ) {
        action();
    } else {
        // enumerate through lastCommands and compare the timestamps of all 5 commands
        // if the user is the same for all 5 commands, and...
        // if the timestamps are all within the vicinity of 20 seconds
        // add the user to the ignoreList
    }  
}


watch_for('command', function() {
   handleCommand({timestamp: 2093293032, user: user}, function(){ message.say('hello there!') })
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);





