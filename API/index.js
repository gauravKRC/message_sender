const express = require('express');
const bodyParser = require('body-parser');
const fast2sms=require('fast-two-sms')
require('dotenv').config();
  
const cors = require('cors')
const app = express();
const port = 3000;
app.use(cors());

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Endpoint to send notifications/SMS
app.post('/sms',async (req, res) => {
  const { phone, message } = req.body;
  console.log(req.body)
  sendSms(message,phone,res)
});

function sendSms(message,phone,res){
   console.log("inside")
var options={
   
   authorization:process.env.FAST_TWO_SMS_API_KEY,
   message:message,
   numbers:[phone]
}
fast2sms.sendMessage(options)
    .then(()=>{
      res.status(200).send("SMS sent successfully");
    })
    .catch((error)=>{
      res.status(500).send(`Error occured while sending sms ${error}`);
    })
   }

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


