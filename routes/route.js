DB = require('../models/database');
var defaultAnswer = "不好意思, 不太清楚您的意思, 可以請您再說一次嗎?";

module.exports = (app, bot) => {
    var linebotParser = bot.parser();

    //server連上3秒後發出訊息
    setTimeout(()=>{
        var userId = 'U6a426a03762213a16a244fcb511749db';
        var sendMsg = '您好, 很高興為您服務 !';
        bot.push(userId, [sendMsg]);
        console.log('userId: ' + userId);
        console.log('send: ' + sendMsg);
    }, 3000);
    
    bot.on('message', (event) => {
        // 把收到訊息的 event 印出來
        console.log(event);
    
        //回覆Client的訊息
        if(event.message.type = 'text'){
            var msg = event.message.text;
            if(msg == "分數"){
                var target = new DB({
                    table: 'StudentInfo',
                    id: 1
                });
                console.log(target);
                target.findOneScore(target, (err, result)=>{
                    var listen = result[0].basicAbility_Listen;
                    var speak = result[0].basicAbility_Speak;
                    var read = result[0].basicAbility_Read;
                    var write = result[0].basicAbility_Write;
                    var ans = "基礎聽力 : " + listen + "分\n" + 
                            "基礎口說 : " + speak + "分\n" + 
                            "基礎閱讀 : " + read + "分\n" + 
                            "基礎寫作 : " + write + "分";
                    event.reply(ans).then((data)=>{
                        console.log(ans);
                    }).catch((error)=>{
                        console.log('error');
                    })
                });
            }
            else{
                event.reply(defaultAnswer).then((data)=>{
                    console.log(defaultAnswer);
                }).catch((error)=>{
                    console.log('error');
                })
            }
        }
    });
    
    
    app.post('/webhook', linebotParser);
} 