function createChannel(classTitle, user) {


var request = require('request');
console.log(classTitle);
var options = {
  'method': 'POST',
  'url': 'https://api.chatengine.io/chats/',
  'headers': {
    'Project-ID': '40296037-f0b7-449f-8a04-b9cfdedab617',
    'User-Name': user[0],
    'User-Secret': '123',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "title": classTitle,
    "is_direct_chat": false
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

for(let i=0;i<user.length;i++) {
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.chatengine.io/chats/131547/people/',
  'headers': {
    'Project-ID': '40296037-f0b7-449f-8a04-b9cfdedab617',
    'User-Name': user[i],
    'User-Secret': '123',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": user
  })

};
}
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
}

createChannel("variableTest2","SerikTheCzar");