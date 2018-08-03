var linebot = require('linebot'),
    express = require('express');
var util = require('util');
var bot = linebot({
        channelId: 1597868599,
        channelSecret: 'a4c45697bc33c10165d1a7cb19ed1349',
        channelAccessToken: 'QuHeqr3RGqE85HrBAJXLCUHWja8zvZ/7dg6xb2AuAoXSA8R2lyH3i/DeBeyJQMHsybCYtwwKUkdrVVAhcGu7l7sxwq1u4tv5DQ4/5hib3GRUX/ig5LD3W7cQOpkzx2xmt07mFOIYUm2+JB0DdsiWjgdB04t89/1O/w1cDnyilFU='
    });

var linebotParser = bot.parser();
var app = express();

bot.on('message', (event) => {
    // 把收到訊息的 event 印出來
    console.log(event);

    //重複client輸入的內容
    if(event.message.type = 'test'){
        var msg = event.message.text;
        event.reply(msg).then((data)=>{
            console.log(msg);
        }).catch((error)=>{
            console.log('error');
        })
    }
});


app.post('/webhook', linebotParser);

//server連上3秒後發出訊息
setTimeout(()=>{
    var userId = 'U6a426a03762213a16a244fcb511749db';
    var sendMsg = 'Hello World !';
    bot.push(userId, [sendMsg]);
    console.log('userId: ' + userId);
    console.log('send: ' + sendMsg);
}, 3000);

// 在 localhost 走 8080 port
var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("My Line bot App running on port", port);
});