//ClassStructure.js
let packedClass = new Object(); //class object
//console.log("hello");
'use strict';
function studentCal(file) {
const fs = require('fs');


let classStructure = [];
let classContainer = {};


let rawdata = fs.readFileSync(file);

let student = JSON.parse(rawdata);
//sample array
let courseArr=[];
//basic for loop, make more advanced
//let example = "Introduction to Macroeconomics: Monday";
//console.log(example.substring(0,example.indexOf(':')));

//shitty modifier code to get rid of the days of the week from the subject of SerikCalendertoJson.json
for(let i=0;i<student.length; i++){
    student[i].Subject=student[i].Subject.substring(0,student[i].Subject.lastIndexOf(':'));
    courseArr.push(student[i]);
    //    console.log(student[i].Subject);
}

for(let a=0;a<50;a++){
    console.log(courseArr[courseArr.length-a]);
}

for(let b=0;b<student.length;b++) {
//only do unique classes
}
}

/*
let courseArr2 = JSON.stringify(courseArr);
fs.writeFile('OutputClassStructure.txt',courseArr2, (err) => {

    if(err) throw err;
}) */

//attributes of a class: times, students, name