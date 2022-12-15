'use strict';

const fs = require('fs');
var moment = require('moment'); // require

let rawdata = fs.readFileSync('Fall2022Courses.json');

let courseList = JSON.parse(rawdata);


let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkClass() {
    const today = new Date();
    let listStudent = glob();
    let totalList = [];
    let retList = [];

    //need to return a list of lists
    //outer list contains the inner list
    //the inner list contains one student and one class
    //outer list is a list of that list
    for (let list1 = 0; list1 < listStudent.length; list1++) { //list of students

        //now we're accessing each student list
        /*parse through their schedule, if they have a class that matches the current time and description against 
        FallCourses2022.json, call addToSchedule -> then break to go to next student and check */
        //let's initialize the array from the glob
        let studentObj = JSON.parse(fs.readFileSync(listStudent[list1]));
        loop1:
            for (let courseParse = 1; courseParse < studentObj.length; courseParse++) { //that students classes

                for (let cList = 0; cList < courseList.length; cList++) { //all classes

                    /* Time Functions */
                    var classTime = moment(courseList[cList].Start_Time, 'HH:mm a');
                    var index = today.toString().indexOf(" (");
                    var todaysDate = Date.parse(today.toString().substring(0, index));
                    var classDateT = Date.parse(moment(courseList[cList].Start_Time, 'HH:mm a'));
                    const fiveMinutesInMillis = 1 * 60 * 1000;
                    var adder = new Date();
                    adder.setTime(classDateT + fiveMinutesInMillis);
                    var subber = new Date();
                    subber.setTime(classDateT - fiveMinutesInMillis);
                    var checker = new Date();
                    checker.setTime(todaysDate);


                    //years
                    let todaysYear = String(new Date().getFullYear());
                    //     console.log(studentObj[0].Name)
                    let cyear = studentObj[courseParse].Start.substring(studentObj[courseParse].Start.lastIndexOf('/') + 1, studentObj[courseParse].Start.lastIndexOf('/') + 5);

                    const classYear = String(new Date(cyear).getFullYear() + 1);
                    //    console.log(classYear);
                    //console.log(todaysYear);
                    //  console.log(classYear);
                    let matchingYear = (classYear == todaysYear);
                    // do we need to check:
                    /*
                        time
                        matching course

                    */
                    let matchTime = courseList[cList].Class_Days.includes(weekDays[today.getDay()]) && (checker >= subber && checker <= adder);
                    //  let text2 = studentObj[courseParse].Subject;
                    ///let text3 = text2.substring(1);
                    //studentObj[courseParse].Subject.substring(0, studentObj[courseParse].Subject.lastIndexOf(':')));
                    let classInc = courseList[cList].Description.includes(studentObj[courseParse].Subject.substring(0, studentObj[courseParse].Subject.lastIndexOf(':')));

                    // console.log(classInc);
                    if (matchTime && classInc && matchingYear) {
                     //   console.log("found a matching course");
                      //  console.log(studentObj[0].Name + " has course: " + courseList[cList].Description);
                        retList.push(studentObj[0].Name);
                        retList.push(courseList[cList].Description);

                        break loop1;
                    }

                }
            }
        retList = [];

        totalList.push(retList);
    }
    return totalList;

}

function glob() {
    let files = [];
    //  const scan = require("scan-dir-recursive");
    let name = 'C:/Users/serik/OneDrive/Documents/GitHub/Hermes-Alpha1/HermesAlpha/src/SCCalender.json'; //'C:/Users/serik/Documents/GitHub/RSwitch/HermesAlpha/src/SCCalender.json';
    // let name = 'C:/Users/serik/Documents/GitHub/RSwitch/HermesAlpha/src/SCCalender.json';
    let name2 = 'C:/Users/serik/OneDrive/Documents/GitHub/Hermes-Alpha1/HermesAlpha/src/GBTest.json'; //'C:/Users/serik/Documents/GitHub/RSwitch/HermesAlpha/src/GBTest.json';
    //let name2 = 'C:/Users/serik/Documents/GitHub/RSwitch/HermesAlpha/src/GBTest.json';
    files.push(name);
    files.push(name2);
    //console.log(files);
    let secondName = 'C:/Users/serik/OneDrive/Documents/GitHub/Hermes-Alpha1/HermesAlpha/src/JG.json'; //'C:/Users/serik/Documents/GitHub/RSwitch/HermesAlpha/src/JG.json';
    // let secondName = 'C:/Users/serik/Documents/GitHub/RSwitch/HermesAlpha/src/JG.json';
    files.push(secondName);
    /*  scan(name, function(files) {
        return files;
    });
   */


    //files.push(name2);
    //console.log(files[1]);
    return files;


}
/*function testprint(files) {
    for(let i=0;i<files.length;i++) {
        for(let a=1;a<JSON.parse(fs.readFileSync(files[i])).length; a++){
            let compatible = JSON.parse(fs.readFileSync(files[i])); 
         //  console.log(compatible[500].Subject);
         if(checkClass()!="noclass") {
           let rrt = checkClass();
           if(rrt.includes(compatible[a].Subject.substring(0,compatible[a].Subject.lastIndexOf(':')))){
                let classRet = checkClass();
                console.log(classRet);
                console.log("hello world");  
        }
    }
    }
}
}
*/
var studentArr = [];

function pushStudent(file1) {
    //let scarr = []
    let scList = fs.readFileSync(file1);
    let scJSON = JSON.parse(scList);
    studentArr.push(scJSON);

    // return 
    // console.log(studentArr[1][0].Name);
}


let userBody = checkClass();

function returnClassID(classTitle3) {
    let classTitle2 = '"' + classTitle3 + '"';
    // console.log(classTitle2)
    let adminsInfo = fs.readFileSync('response.json');
    let classIDList = JSON.parse(adminsInfo);
    //console.log("courseList " + JSON.stringify(classIDList[4].title));
    for (let a = 0; a < classIDList.length; a++) {
        //  console.log("course title: " + classIDList[a].Title);
        if (classTitle2 == JSON.stringify(classIDList[a].title)) {
            //console.log("children found");
            //   console.log("class Id is: " + classIDList[a].ID);
            return JSON.stringify(classIDList[a].id);
        }
    }
}

function master() {
    checkClass();
    for (let a = 0; a < userBody.length; a++) {
        const addToClass = require('./AdminTools');
        //console.log("is this undefined? " + userBody);
        let classIDret = returnClassID(userBody[a][1]);
        //console.log("this is undefined: " + classIDret);
        const totalAdd = addToClass.addUser(classIDret, userBody[a][0]);
    }

    setTimeout(master, 3000);
}
master();