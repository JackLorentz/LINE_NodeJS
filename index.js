//server設定
var express = require('express');
var app = express();
//line機器人設定
var linebot = require('linebot');
var util = require('util');
var bot = linebot({
        channelId: 1597868599,
        channelSecret: 'a4c45697bc33c10165d1a7cb19ed1349',
        channelAccessToken: 'cKIU+9qv8TjUwpG/a4gXN6aXRi4yLuAGEz59XC7/cOvG8u9KZOMtngxx4p1M0LCBybCYtwwKUkdrVVAhcGu7l7sxwq1u4tv5DQ4/5hib3GRuHOWwkJCx4pNrw6prPcgTB9cj1xZ6a2ReZIyYFScFjQdB04t89/1O/w1cDnyilFU='
    });
//路由
var router = require('./routes/route');
router(app, bot);
// 在 localhost 走 8080 port
var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("My Line bot App running on port", port);
});