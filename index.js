let Discord = require('discord.js');
let client = new Discord.Client();
let alexa = require('alexa-bot-api');
var chatbot = new alexa('aw2plm');

client.on('ready', () => {

    let c = client.channels.cache.get('ID DE UM CANAL')
    c.send('Estou online, pode mandar bala!')
    console.log('online')
    client.user.setActivity(`Conversando com meus amigos!`);
})

client.on('message', async message => {
    if(message.channel.name.includes('chat-bot')){
    if(message.author.bot) return;
let content = message.content;
chatbot.getReply(content).then(r  => {
    
    message.channel.send(r)
})
    } else {
        }
        })
    

client.login('token do seu bot')