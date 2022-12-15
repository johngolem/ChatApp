const fs = require('fs');
var moment = require('moment'); // require

let rawdata = fs.readFileSync('Fall2022Courses.json');
let weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let courseList = JSON.parse(rawdata);
console.log(courseList.length);
function checkClass() {
    const today = new Date();
    for(let i=0; i<courseList.length;i++) {
        console.log(courseList[i].Class_Days);
        if(courseList[i].Class_Days.includes(weekDays[today.getDay()])) {
            //console.log("we've found it: " + courseList[i].Description.includes("ADV0321A: On Course For Academic Success"));
            //convert Fall2022Courses.json class time to comparable time
           // console.log(courseList[i].Class_Days);
            //console.log(courseList[i].Description==="ADV0321A: On Course For Academic Success");
        //convert Fall2022Courses.json class time to comparable time
            var classTime = moment(courseList[i].Start_Time, 'HH:mm a');
            var index = today.toString().indexOf(" (");
            var todaysDate = Date.parse(today.toString().substring(0,index));
            var classDateT = Date.parse(moment(courseList[i].Start_Time, 'HH:mm a'));
           // console.log("This is the time: " + todaysDate);
            //console.log("This is the class time: " + classDateT);
            if (todaysDate === classDateT) {
                //now we search for all students who have that specific class
                //has to search through a list of students --> one student can be in multiple classes at once but multiple classes can happen at once
                let classObject = courseList[i].Description;
                console.log(classObject);
              //  console.log(classObject);
                return classObject;
            } 
            
        } 
    }
}

checkClass();