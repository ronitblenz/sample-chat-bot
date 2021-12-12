# Cloud Native Hackathon 2021
Project : Sample Whatsapp Bot
Sponsor tool : Twillio

Base-code Source : https://github.com/joenash/cloudnative-demo

# Inspiration :

In our daily lives, We encounter a lot of instances where we have to produce a PDF out of a image file for submission of projects, term papers and assignments, which is a very tiresome job. This project aims for a quick and convenient way of doing the same task which is just a few clicks away.



# How we built it :

STEP 1 - Installation Packages :

Visual Studio Code - Text Editor

https://code.visualstudio.com/download

Node.js - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine

```
$ sudo apt install nodejs
```
Express - Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.
```
$ npm install express
```
Dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
```
$ npm install dotenv
```
Git - Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

```
git-scm
```
or, (HOMEBREW method)
```
brew install git
```

STEP 2 - Cloning the base code repository

```
git clone https://github.com/joenash/cloudnative-demo.git
```

STEP 3 - Fetching credentials using dotenv 
```js
// fetch creds using dotenv for securing the Credentials

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const MessagingResponse = require("twilio").twiml.MessagingResponse;
let hackers = [];

```
```js
// creating .env file for storing Credentials from where they are fetched

TWILIO_ACCOUNT_SID=<your-sid>
TWILIO_AUTH_TOKEN= <your-auth-token>
```

STEP 4 - Building the BOT Commands

```js

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
    twiml.message("Got it! We will be in touch:), anything else? ")
  }
  else{
    hackers[hackerIndex].problem.push(req,body,Body);
    twiml.message("OK! We will bein touch");
  }

  console.log(hackers);
  res.writeHead(200, {"Content-type" : "text/xml"});
  res.end(twiml.toString());

});
```

STEP 5 - Creating local host and ngrok link for Testing

```
localhost:3000
```

```
brew install ngrok/ngrok/ngrok
```

# Challenges faced :

Being our team's first ever Hackathon, we encountered many obstacles which includes the sync with the Twillio page and the code, data exchange in form of Media files and lastly, the documentation which is written with keen details and lucid language. But, after all we succesfully made it through.

# What we learned :

These few days made us understand that we have just stepped into the programming field and there are various things of which we are unaware of. We learnt more about Javascript, APIs, Network, and Automation. We got to know how the things work on the industrial level.

# Technologies in use :

- express.js
- javascript
- json
- node.js
- npm
- twilio

Thank you for reading till the end,
Hope this project helps someone in real life.
