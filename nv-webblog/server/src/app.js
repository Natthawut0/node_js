/*let express = require('express');
const {sequelize} = require('./models')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./Routes')(app)//จำเป็น

let port = 8081;
sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
  })*/
  
  let express = require('express')//npm install อยู่ที่ไฟล์ package.js
  let bodyParser = require('body-parser')
  const {sequelize} = require('./models')
  
  const app = express()//สร้างชื่อexpress
  
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  
  require('./routes')(app)
  
  app.get('/status', function (req, res ){//api = ชื่อexpress.เมธอด('API/status', function (req, res ){...})
    res.send('Hello nodejs server')//ส่งค่ากลับไป
  })
  
  app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
  })
  
  
  let port = 8081
  
  sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
  })