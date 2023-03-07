//Serik Czarnecki
//10-3-2022

async function createUser(userName, autoPassword, lastName, Name) {
  var request = require('request');
 // console.log("hit request");
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
   // console.error(e);
  }

}



function autoPassword() {
  var length = 12,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function firebaseCollect(userName, name, lastName, password) {
  var firebase = require('firebase')
var firebaseConfig = {
  apiKey: "AIzaSyCwYCjJs1ORktVIG85LVGuLmHDQKFlEJZ0",
    authDomain: "hermes-superchat.firebaseapp.com",
    databaseURL: "https://hermes-superchat-default-rtdb.firebaseio.com",
    projectId: "hermes-superchat",
    storageBucket: "hermes-superchat.appspot.com",
    messagingSenderId: "2041104259",
    appId: "1:2041104259:web:4164082fcdae22cc2ad8b6"
}
firebase.initializeApp(firebaseConfig);
// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it from here.

const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
//console.log(fb);
 // let ap = autoPassword();
 // console.log("auto password is: " + ap);
 // const signup = ({ email, userName, password }, { setSubmitting }) => {
    fb.auth.createUserWithEmailAndPassword(userName, password)
      .then(res => {
        if (res?.user?.uid) {
          createUser(userName, password, name, lastName);
        //  console.log("res user found + "+ res.user.uid);
          fetch('/api/createUser', {
            method: 'POST',
            body: JSON.stringify({
              userName,
              userId: res.user.uid,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
        } else {
         // console.log("fb insert not working");
          setServerError(
            "We're having trouble signing you up. Please try again.",
          );
        }
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
         // setServerError('An account with this email already exists');
        } else {
          //console.log("error found here");
        //  console.log(err.code);
          //setServerError(
          //  "We're having trouble signing you up. Please try again.",
          //);
        }
      })
      .finally(() => console.log("hello"));
  
}

async function createChannel(classTitle, admin) {
 
    var request = require('request');
    //console.log(classTitle);

    var options = {
      'method': 'POST',
      'url': 'https://api.chatengine.io/chats/',
      'headers': {
        'Project-ID': '40296037-f0b7-449f-8a04-b9cfdedab617',
        'User-Name': admin,
        'User-Secret': '123',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": classTitle,
        "is_direct_chat": false
      })

    };
    try {
      let {data} = await request(options);
    } catch (e) {
 //     console.error(e);
    }
  
}
async function addUser(chatID,user) {
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.chatengine.io/chats/' + chatID + '/people/',
  'headers': {
    'Project-ID': '40296037-f0b7-449f-8a04-b9cfdedab617',
    'User-Name': "SerikTheCzar",
    'User-Secret': '123',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": user
  })

};

await request(options, function (error, response) {
  if (error) throw new Error(error);
 // console.log(response.body);
});
}
//addUser(133250, "andreapanlilio@landmark.edu");
//export {printToConsole};
function addtoChannel(chatID, user){
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.chatengine.io/chats/' + chatID + '/people/',
  'headers': {
    'Project-ID': '40296037-f0b7-449f-8a04-b9cfdedab617',
    'User-Name': "SerikTheCzar",
    'User-Secret': '123',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": user
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

}
//addtoChannel(133191, "tester1");
'use strict';
const fs = require('fs');

//const fs = require('fs');


let rawdata = fs.readFileSync('AzureFullContent.json');

let humanList = JSON.parse(rawdata);
for(let a=0; a<humanList.length; a++) {
  let f = autoPassword();
 // humanList[a].Password=f;
  //console.log(f);
}

let data = JSON.stringify(humanList);
//fs.writeFileSync('AzurePass2.json', data);
let rd2 = fs.readFileSync('AzurePass2.json');
let passinList = JSON.parse(rd2);
//let rawdata = fs.readFileSync('Fall2022Courses.json');
for(let cc = 0; cc<1; cc++) {
  if(passinList[cc].surname==""){
    passinList[cc].surname = passinList[cc].displayName;
    passinList[cc].givenName = passinList[cc].displayName;
  }
  //console.log(passinList[cc].surname);
  //firebaseCollect(passinList[cc].mail, passinList[cc].givenName, passinList[cc].surname, passinList[cc].Password);
  //setTimeout()
}
let cc=30;
function printAll(testerr){
  //console.log(testerr);
  return testerr+testerr;
}
//firebaseCollect(passinList[cc].mail, passinList[cc].givenName, passinList[cc].surname, passinList[cc].Password);
//let courseList = JSON.parse(rawdata);
firebaseCollect("serikaczarnecki@gmail.com","Serik", "Czarnecki", "1IloveSocer$4");
module.exports = {addUser};
//module.exports = {printAll};
//let courseArr = [];

//firebaseCollect("sc@gmail.com", "The Great", "Alexander", "1234");



async function deleteChat(chatID){
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': 'https://api.chatengine.io/chats/' + chatID + '/',
  'headers': {
    'Project-ID': '40296037-f0b7-449f-8a04-b9cfdedab617',
    'User-Name': 'SerikTheCzar',
    'User-Secret': '123'
  }
};
await request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
}

