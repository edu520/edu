// 引入依赖
var express = require('express');
var utility = require('utility');

var api = require('./api');
var router = express.Router();

var R = require('./router');


// 建立 express 实例
var app = express();


/*连接数据库*/
// var dataUrl = 'mongodb://localhost/sky';
// var mongoose = require('mongoose');
// mongoose.connect(dataUrl);

//设置静态文件目录
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PROT || 3000);
// app.set('views',path.join(__dirname,'/public'));
app.set('view engine', 'html');


/*路由*/
// router.get('/', function (request, response) {
//     response.end("Welcome to the homepage!");
// });
//
// router.get('/about', function (request, response) {
//     response.end("Welcome to the about page!");
// });
//
// app.use('/', router);

// 接口
app.get('/api', api.index);

/*404页面*/
router.get("*", function (request, response) {
    response.end("404!");
});

app.listen(3000, function (req, res) {
    console.log('app is running at port 3000');
});


