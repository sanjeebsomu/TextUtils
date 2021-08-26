import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [switchText, setSwitchText] = useState("Enable Light Mode")
  const [alert, setAlert] = useState(null)//here alert is an object

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  };

  const toggleMode = (cls)=>{//this cls will recive onclick toggle mode command from navbar  
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      setSwitchText('Enable Light Mode')
      document.body.style.backgroundColor = '#000629';
      // showAlert('Dark Mode has been Enabled', 'success');//calling the show alert function, with type and messages
      // document.title= 'TextUtils - DarkMode'//changing the title dynamically
    } 
    else {
      setMode('light')
      setSwitchText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      // showAlert('Light Mode has been Enabled', 'success');
      // document.title= 'TextUtils - LightMode'//changing the title dynamicallyn
    }
  }
  const showAlert=(message, type)=>{//show alert is a function which will help us to show alert messages
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const pinkMode=()=>{
    const pinkBtn = document.getElementById('pinkBtn')
    pinkBtn.addEventListener('click', function(){
      document.body.style.backgroundColor = "#fc0398";
      document.getElementById("heading").style.color = "#91577a";
      document.getElementById("myBox").style.color = "#91577a";
      document.getElementById("myBox").style.backgroundColor = "#fc0398";
    })
  } 
   const yelMode=()=>{
    const yelBtn = document.getElementById('yelBtn')
    yelBtn.addEventListener('click', function(){
      document.body.style.backgroundColor = 'yellow';
      document.getElementById("heading").style.color = "grey";
      document.getElementById("myBox").style.color = "grey";
      document.getElementById("myBox").style.backgroundColor = "yellow";
    })
  }
  return (
    <>
      <Router>
      <Navbar title = "TextUtils"  mode = {mode} toggleMode = {toggleMode} pinkMode={pinkMode}  yelMode={yelMode} switchText ={switchText}/>
      <Alert alert = {alert}/>
      {/* this alert inside the curly braces is a STATE, which we defined above */}
      {/* in the above line:- when someone click on the switch located in nav bar, [onclick return toggle mode], here we define that toggle mode is equals to js function toggleMode, so we need to add a funcion */}
      <div className="container my-3">
      <Switch>
            <Route exact path="/About">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Try Text Utils - Word Counter | Charecter Counter" mode = {mode}/>
            </Route>
      </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
