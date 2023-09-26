import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';

// dark
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "./store/actions/darkModeAction";

function App() {

 // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

// dark
// assigning useDispatch hook of redux to a variable
const dispatch = useDispatch();

// calling our state from the reduxer using useSelector hook of redux
const mode = useSelector((state) => state.darkMode);

// destructuring isdarkMode state from mode variable called using useSelector hook of redux
const { isdarkMode } = mode;

// function to be fired on onChange method to switch the mode
const switchDarkMode = () => {
  isdarkMode
    ? dispatch(handledarkMode(false))
    : dispatch(handledarkMode(true));
};
useEffect(() => {
  //changing color of body with darkmode in useEffect
  document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
}, [isdarkMode]);

// dark end

  return (
    <>
    {/* dark */}
    <div
        id="darkmode"
        // inline styling with darkmode:  comment out to use this for example //
        /* style={{ background: isdarkMode ? "white" : "yellow" }} */
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          // onChange prop to fire our internal function for changing the dark mode value
          onChange={switchDarkMode}
          // checking checked prop with dark mode state
          checked={isdarkMode}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
    {/* darkend */}
      <Navbar auth={auth1}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Protectedroute exact path="/login" component={Login} auth={auth1}/>
        <Protectedroute exact path="/register" component={Register} auth={auth1}/>
        <Protectedroute exact path="/dashboard" component={Dashboard} auth={auth}/>
        <Protectedroute exact path="/logout" component={Logout} auth={auth}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
