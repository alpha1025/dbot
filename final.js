const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'
  client.on('ready',() =>
  {
    console.log ('connected as '+ client.user.tag)
    client.user.setActivity("GTA V",{type:"WATCHING"})
  })
  client.on('message',message => {
    if(message.content === '!ping')
    {
      message.channel.send('Pong.')
    }
  })
  client.login(process.env.NzEyMTQwMzQyODY2MjE0OTMy.XtVa1g.SfpJFEl63TSBszX57OQWRaC34B8)
