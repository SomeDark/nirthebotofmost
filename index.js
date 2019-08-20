const Discord = require('discord.js');;
const bot = new Discord.Client();

const token = 'NjEzMzc5MjAxMzE5MzA1MjM2.XVwECQ.eMkvcnJGeIrfxl7ACfBlJ2WFz4k';

bot.on('ready', () => {
    console.log('I am ready!');
});



bot.on('message', msg=>{
if(msg.content === "מה קורה בוט"){
msg.reply('אתה יודע קשה להיות בוט...');
}
})

bot.on('message', msg=>{
    if(msg.content === "בוט מטומטם"){
    msg.reply('נפגעתי תפסיק לפגוע לי ברגשות');
    }
    })

    bot.on('message', msg=>{
        if(msg.content === "מה התחביבים שלך בוט?"){
        msg.reply('לגעת בטל ולהטריד אותו');
        }
        })

        bot.on('message', msg=>{
            if(msg.content === "בוט אני יכול לקבל נשיקה בפופיק"){
            msg.reply('ברורררר');
            }
            })

            bot.on('message', msg=>{
                if(msg.content === "בוט מה אתה חושב על שליו צור"){
                msg.reply('שליו צור המלך');
                }
                })
client.login(process.env.BOT_TOKEN);
