
//variables
const credits = require('./credits.json')
const commando = require('discord.js-commando')
const Discord = require('discord.js')
const bot = new Discord.Client();
const Token = ('NDc2MjI3NTA3MzQ4MDQ1ODI0.D2CvMg.D2GXITQwOMBooiUgFyXoG3QHCjI');
const chance = Math.floor(Math.random() * 6)
const prefix = '*';
var weebpurge = false;
var furrypurge = false;


//Embeds
var BotHelp = new Discord.RichEmbed()
    .setTitle("Command List")
    .addField("Status", "Commands to view the bots status.")
    .addField("Reactions", "The bot's reactions to certain messages.")
    .addField("Fun", "Commands you can use for fun.")
    .addField("Settings", "To configure the bot.")
    .addField("To view specific modules please use *help [command module]", "ex: *help Fun")
    .setColor(0xFF0000)
    .setThumbnail("https://static.wixstatic.com/media/e545f4_d7d2d840b2d541f6a3aa3b67239463f1~mv2.jpg/v1/fill/w_80,h_80,al_c,q_80,usm_0.66_1.00_0.01/download%20(2).webp")
    .setFooter("For more info contact me at Doggo #9867 and see the website at https://officialdiscordlou.wixsite.com/website")

/****************************
     Changelog

     *added a curse response
*****************************/
//commands




bot.on('message', function(message){
    //message vars
    var unfinished = "This feature isn't implemented yet " + message.author + "!";

    //commands
    if(message.content == 'hello')
    {
        message.channel.sendMessage('Hello '  +  message.author +  ', how are you?');
    }
    if(message.content == "help")
    {
        message.member.sendEmbed(BotHelp);
    }
    if(message.content == 'fuck'){
        message.channel.sendMessage('Hey, watch your profanity!')
    }
    if(message.content == 'shit'){
        message.channel.sendMessage('I will literally ban you from my christian minecraft server.')
    }
    if(message.content == 'what the fuck'){
        message.channel.sendMessage('what happened?')
    }
    if(message.content == 'what the hell'){
        message.channel.sendMessage('Was it serious?')
    }
    if(message.content == 'wtf'){
        message.channel.sendMessage('lol')
    }
    if(message.content == 'wth'){
        message.channel.sendMessage('lol')
    }
    if(message.content == 'Hey, Lounge Bot!'){
        message.channel.sendMessage('Yeah?')
    }
    if(message.content == 'Hey Lounge Bot!'){
        message.channel.sendMessage('Yeah?')
    }
    if(message.content == 'wat'){
        message.channel.sendMessage('Want me to explain?')
    }
    if(message.content == 'what?'){
        message.channel.sendMessage("I'll explain it for you")
    }
    if(message.content == 'credit'){
        message.channel.sendMessage(unfinished)
    }
    if(message.content == 'creditinfo'){
        message.channel.sendMessage(unfinished)
    }
    if(message.content == 'owo'){
        message.channel.sendMessage("what's this?")
    }
});



//logon
bot.on('ready', function(){
    bot.user.setActivity('Some weird video game.')
    console.log(`Bot Is On.`); 
})


//to login the bot
bot.login(Token);