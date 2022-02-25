import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router,Route, } from "react-router-dom";
import UpdateForm from './components/HomeComponents/UpdateForm';

function App() {
  return (
   <Router>
     <Nav/>
     <Route path='/update-car-info/:id'>
      <UpdateForm/>
    </Route>
     <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/sign-up'>
      <SignUp/>
    </Route>
    <Route exact path='/'>
      <Home/>
    </Route>
   </Router>
  );
}

export default App;
