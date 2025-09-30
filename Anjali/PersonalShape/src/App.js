
import './App.css';
// import Demo from './components/demo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HeroSection from './components/Home';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div>
     
      <NavBar/>
       <div className='space-y-24 bg-white-500'>
      <HeroSection/>
      
      {/* <Demo/> */}
      
      <AboutMe/>
      </div>
    </div>
  );
}

export default App;
