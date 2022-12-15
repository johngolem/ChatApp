//import {useChat} from 'context';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Login, Signup, Admin, TeacherUI } from 'components';
import { Chat } from 'components';
// import { Chatui } from 'components';
import { useAuth, useResolved } from 'hooks';
import { useEffect } from 'react';
import { ChatProvider } from 'context/ChatContext';
import { fb } from 'service';
// import Chatui from 'components/Chat/Chatui';
import { Chatex } from 'components/Chat/originalc';
import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);
  // const admins = [
  //   'serikczarnecki@landmark.edu',
  //   'GeraldBelton@landmark.edu',
  //   'GabriellaOrtega@landmark.edu',
  // ];
  // const teachers = [
  //   'johnrusso@landmark.edu',
  //   'kevinkeith@landmark.edu',
  //   'karinaassiter@landmark.edu',
  // ];
  // const students = [
  //   'JonathanGerraughty@landmark.edu',
  //   'student1@landmark.edu',
  //   'student3@landmark.edu',
  // ];

  // useEffect(() => {
  //   fb.firestore
  //     .collection('chatUsers')
  //     .where('userName', '==', 'trees')
  //     .get()
  //     .then(res => {
  //       const user = res.docs[0]?.data();
  //       console.log(user);
  //     })
  //     .where('gender', '==', 'Female')
  //     .get()
  //     .then(res => {
  //       //const FemUsers = res.docs[0]?.data();
  //       console.log(res.docs.map(snap => snap.data()));
  //     });
  // },
  // []);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/' : '/login');
    }
  }, [authResolved, authUser, history]);

  return authResolved ? (
    <ChatProvider authUser={authUser}>
      <div className="app">
        <Switch>
          {/* <Route path="/" exact component={Chat} /> */}
          <Route path="/" exact component={Chatex} />
          {/* <Route path="/" exact component={Chatui} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/admin" component={Admin} />
          <Route path="/teacher" component={TeacherUI} />
        </Switch>
      </div>
    </ChatProvider>
  ) : (
    <>Hermes Loading...</>
  );
};
