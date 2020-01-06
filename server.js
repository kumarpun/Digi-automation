const express = require("express");
var path=require('path');
const spawn = require('child_process').spawn;
var shell = require('shelljs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname));
// var testscript = exec('sh ec2startscript.sh /Users/apple/desktop/digii-automation/digii-test');
// var cmd = sh /Users/apple/desktop/digii-automation/digii-test/ec2startscript.sh
// sh
app.get('/test', async function(req, res) {
   try{
   test = shell.exec('./ec2startscript.sh');
     return res.status(200).json({
         "success": "true",
         "message": "Protractor test run successfully",
         "data": test
     })
   } catch(err){
       return res.status(500).json({
           "success": false,
           error: err.message
       })
     }
   })


app.listen(9000, () => {
  console.log("Server is listening on port: 9000");
});
