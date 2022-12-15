async function createUser(userName, autoPassword, lastName, Name) {
    var request = require('request');
    console.log("hit request");
   // var ap = autoPassword();
    var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  
  var options = {
    'method': 'POST',
    'url': 'https://api.chatengine.io/users/',
    'headers': {
      'PRIVATE-KEY': 'b3732f59-6b5e-4d64-bbc7-c2e4adce29d8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": userName,
      "first_name": Name,
      "last_name": lastName,
      "secret": retVal
    })
  
  };
    try {
      let {data} = await request(options);
    } catch(e) {
      console.error(e);
    }
  
  }

  createUser("sc@gmail.com", "123Test", "SSS", "CCC");