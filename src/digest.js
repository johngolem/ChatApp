//there are two methods we need to utilize, addUser and createChannel
//create channel is based on the name of the class, and the administrator
//add user needs the chat name, and the users(as a list)
//courses dictate when the class is created
import { printToConsole } from './service/ChannelCreator.js';
//so each class is an object, and each class has a time and associated students with it
//this function(s) takes apart a student's schedule (with their name) and adds them to the stack for each class, so it sees what classes they have, and adds their name to it
//so we'd technically need a preexisting list of all classes and times, and then this code reads the students schedule and adds them to the class' details
console.log("hello");

'use strict';
const fs = require('fs');


let rawdata = fs.readFileSync('SerikCalendartoJson.json');

let courseList = JSON.parse(rawdata);


let courseArr = [];


//console.log(student);
for(let i=0; i<courseList.length; i++) {
    printToConsole();

}
