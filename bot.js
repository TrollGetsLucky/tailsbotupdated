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
client.on('message', message => {
    if (message.content === 'Tails are you fat') {
    	message.reply('no -_-');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails are you Tails') {
    	message.reply('Yes');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails date of sonic 3') {
    	message.reply('February 2, 1994');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails date of sonic and knuckles') {
    	message.reply('October 18, 1994');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails date of sonic cd') {
    	message.reply('September 23, 1993');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails date of sonic 2') {
    	message.reply('November 21, 1992');
  	}
});
client.on('message', message => {
    if (message.content === 'Tails date of sonic 1') {
    	message.reply('Original release dates: NA: June 23, 1991 EU: July 1991 JP: July 26, 1991');
  	}
});
client.on('user', user => {
    if (user.setGame === 'Sonic Mania') {
    	user.setGame('Sonic Mania');
  	}
});
          

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);





