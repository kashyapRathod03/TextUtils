// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/alert';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import Description_web from './components/Description_web';
import About from './components/about';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Description from './components/Description_web';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("darkmode unable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("lightmode unable", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <Routes>

          <Route path="/" element={ 
          <><div className='container'>
              <TextForm mode={mode} showAlert={showAlert} heading="Try Textxutils - Word Counter,Character Counter" />
            </div>
          </>
          } />
            <Route path="/speechrecognization" element={
              <div className='container'>
                <About mode={mode} showAlert={showAlert} heading="Try Textxutils - Word Counter,Character Counter"/>
              </div>
            }/>

         
        </Routes>
        <div className='container'>
            <Description_web/>            
        </div>

      </Router>
    </>
  );
}

export default App;
