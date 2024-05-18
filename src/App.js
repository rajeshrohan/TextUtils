import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import {Routes, Route} from "react-router-dom";

function App() {
  const [Mode,   setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500 );
  }

  const toggleMode =() =>{
    if(Mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='#042743';
        showAlert("Dark Mode has been Enabled", "success");
      }
    else{
      setMode('light'); 
      document.body.style.backgroundColor ='white'; 
      showAlert("Light Mode has been Enabled", "success");
    }   
  }

  return (
    <>
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert} />

    <div className="container my-3">
    <Routes>
        <Route path='/Home'     element={<h1>Rajesh Rohan</h1>}/>  
        <Route path='/' element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={Mode}/>} />
        <Route path='/about'    element={<About mode={Mode}></About>}/>
    </Routes>
    </div>
    
    </>   
  );
}

export default App;
