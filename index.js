const express = require("express");
const twilio = require('twilio');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));

// fetch creds
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const MessagingResponse = twilio.twiml.MessagingResponse;
let hackers = [];

function findHackers(sender) {
  return hackers.findIndex((hacker) => hacker.sender === sender);
}

function createHacker(sender){
  return (hackers.push({sender,}) - 1);
}

// render site
app.get("/", (req, res) => {
  res.render("index.html");
});

// recv txt msg START
app.post("/recvtext", (req, res) => {
  console.log(req.body.Body);

  const sender = req.body.ProfileName;
  const hackerIndex = findHackers(sender);
  const twiml = new MessagingResponse();

  if (hackerIndex === -1){
    createHacker(sender);
    twiml.message("Hi, how can we help you today?");
  }
  else if(!hackers[hackerIndex].hasOwnProperty("problem")){
    hackers[hackerIndex].problem = req.body.Body;
    twiml.message("What's your Discord username?");
  }
  else if (!hackers[hackerIndex].hasOwnProperty("discord")) {
    hackers[hackerIndex].discord = req.body.Body;
    twiml.message("Got it! We will be in touch:), anything else?")
  }
  else{
    hackers[hackerIndex].problem.push(req,body,Body);
    twiml.message("OK! We will be in touch!");
  }

  console.log(hackers);
  res.writeHead(200, {"Content-type" : "text/xml"});
  res.end(twiml.toString());

});
// recv txt msg END

// init connection
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
