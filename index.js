let Discord = require('discord.js');
let client = new Discord.Client();
const deri = require('derieri');

client.on('ready', () => {

    let c = client.channels.cache.get('id-canal') //Coloque id de um canal
    c.send('Online') //Aparece essa mensagem no chat
    console.log('Online.') //Aparece essa mensagem no console
    console.log('Criador: ! [ᴅʜ] Kawyyxz#0001') //Créditos hehe
    client.user.setActivity('Gosto de muitos amigos, quer ser um deles? 💖'); //Status do bot
})

client.on('message', async message => {
    if(message.author.bot) return;

    
    if(!message.channel.name.includes('chat-bot')) return; //Mude o nome do canal para um que você queira utilizar a Alexa!
    deri(message.content).then(response => {
        message.channel.send(response); //Enviará a resposta da mensagem
    });
    })



client.login('token') //Coloque o token do seu BOT
