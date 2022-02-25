import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router,Route, } from "react-router-dom";

function App() {
  return (
   <Router>
     <Nav/>
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
