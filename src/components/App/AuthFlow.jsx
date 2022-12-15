if(authResolved && admins.includes(user.email)) {
    console.log("admin failed");
    history.push(!!authUser ? '/admin' : '/login');
  } else if (authResolved && teachers.includes(user.email)) {
    history.push(!!authUser ? '/teacher' : '/login');
    console.log("teacher failed");
  } else if (authResolved && students.includes(user.email)) {
    console.log("user is for some reason being sent to /");
    history.push(!!authUser ? '/' : '/login');
  } else if (user.email==null){
    history.push('/login');
    console.log("user hasn't logged in yet");
  } else {
    console.log("hasn't logged in yet");
    history.push('/login');
   
  }