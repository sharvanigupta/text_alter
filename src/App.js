import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');           //when dark mode is enabled

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode enables","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("DarkMode Disables","success");
    }
  }

  const[alert,setAlert]=useState(null);
  const showAlert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <Router>
    <Navbar title="Tanya Blogs" item="About Tanya" mode={mode} changeMode={toggleMode} />
    <Alert alert={alert}/>
    
      <Routes>
        <Route  index element={ <Forms showAlert={showAlert} TextName="ENter TExt BElow -" mode={mode} /> } />
        <Route  exact path="about" element={ <AboutUs mode={mode} /> } />
        <Route  exact path="contact" element={ <ContactUs mode={mode} /> } />
      </Routes>
    

    </Router>
  );
}

export default App;
