const { Client } = require('discord.js');
const client = new Client();
const deri = require('./reply.js');

client.on('ready', () => {
    client.channels.cache.get('id-canal').send('Online'); //Aparece essa mensagem no chat
    console.log('Online.'); //Aparece essa mensagem no console
    console.log('Criador: ! [ᴅʜ] Kawyyxz#0001'); //Créditos hehe
    client.user.setActivity('Gosto de muitos amigos, quer ser um deles? 💖'); //Status do bot
});

client.on('message', async message => {
    if(message.author.bot || !message.channel.name.includes('chat-bot')) return;
    return deri.reply(message.content, message.author).then(response => {
        return message.channel.send(response);
    });
});

client.login('token'); //Coloque o token do seu BOT
