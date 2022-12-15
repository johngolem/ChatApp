new Date (new Date().toDateString() + ' ' + today.getHours() + ':' + today.getMinutes());
var cDate = moment();
var ttime = "2013/05/29 " + moment().format('hh:mm:ss');

var from = new Date(Date.parse(ttime));

// console.log(courseList[i].Start_Time);
// console.log(ttime);
var classTime = moment(courseList[i].Start_Time, 'h:mm:ss a').toDate();

console.log(classTime); //> Date.parse('01/01/2011' + classTime));

      // console.log(courseList[i].Description + " + " + classTime);
//   console.log(realTime.diff(realCT));
if(courseList[i].Class_Days.includes(weekDays[today.getDay()])) {
   // if(classTime.isAfter(ttime)){
   
      //  console.log(courseList[i].Description + " starts at: " + classTime);
  //  }
}