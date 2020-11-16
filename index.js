let Discord = require('discord.js'); //npm i discord.js 
let client = new Discord.Client();
let alexa = require('alexa-bot-api'); //npm i alexa-bot-api
var chatbot = new alexa('aw2plm');

client.on('ready', () => {

    let c = client.channels.cache.get('ID DE UM CANAL') //Puxará um canal!
    c.send('Estou online, pode mandar bala!') // Enviará uma mensagem avisando que está online
    console.log('online') // Avisará no console que está online
    client.user.setActivity(`Conversando com meus amigos!`); // Coloca um status
})

client.on('message', async message => {
    if(message.channel.name.includes('chat-bot')){
    if(message.author.bot) return;
let content = message.content;
chatbot.getReply(content).then(r  => {
    
    message.channel.send(r) // Envia a resposta
})
    } else {
        }
        })
    

client.login('token do seu bot')
