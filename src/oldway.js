for (let i = 0; i < courseList.length; i++) {
    // console.log(courseList[i].Class_Days);
    if (courseList[i].Class_Days.includes(weekDays[today.getDay()])) { //check for all classes that fall on today's day of the week
        //this works, it properly scans the days and gets all the classes on the current day
  //      console.log(courseList[i].Description);

        var classTime = moment(courseList[i].Start_Time, 'HH:mm a');
        var index = today.toString().indexOf(" (");
        var todaysDate = Date.parse(today.toString().substring(0, index));
        var classDateT = Date.parse(moment(courseList[i].Start_Time, 'HH:mm a'));
        //console.log("This is the class time + " + classDateT);
        // console.log("This is the time: " + todaysDate);
        //console.log("This is the class time: " + classDateT);
        const fiveMinutesInMillis = 5 * 60 * 1000;
        var adder = new Date();
        adder.setTime(classDateT + fiveMinutesInMillis);
        var subber = new Date();
        subber.setTime(classDateT - fiveMinutesInMillis);
        // console.log("this is five minutes before the class: " + subber);
        //console.log("this is five minutes after the class: " +adder);

        var checker = new Date();
        checker.setTime(todaysDate);
    //    let feo2 = glob();
      //  console.log(feo2);
  //    console.log("this is checker " + checker);
  //    console.log("this is subber " + subber);
        // console.log("warrior plus: " + adder);
        if (checker >= subber && checker <= adder) { //check if a class falls on the current time
            //now we search for all students who have that specific class
            //has to search through a list of students --> one student can be in multiple classes at once but multiple classes can happen at once
            //  console.log(classDateT);
            
            let classObject = courseList[i].Description; //get the course description of a class that matches
            let feo = glob(); //assign feo to a list of all student json files
           //  console.log("found matching class");
            for (let b = 0; b < feo.length; b++) {
                for (let a = 1; a < JSON.parse(fs.readFileSync(feo[b])).length; a++) {
                    let compatible = JSON.parse(fs.readFileSync(feo[b]));

                    console.log(compatible[b].Name);
                 //  console.log(feo[1]);
                    if (classObject.includes(compatible[a].Subject.substring(0, compatible[a].Subject.lastIndexOf(':'))) && (compatible[b].Name!=null)) {
                        console.log("Student name: " + compatible[b].Name + " Student's class: " + classObject);
                       break;
                      //  console.log(compatible[1]);
                        //         console.log("hello world");
                    }
                    
                 //   console.log("break here");
                    

                }
                
            }
         //   break;
        }

    }

}