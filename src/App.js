import React, {useState, useEffect,} from "react";
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import './css/App.css';
import hello2u from "./components/hello2u.jpg";

function Main(props) {
  return(
    <section>
      <img   
        src={hello2u} 
        height={200} 
        alt="My phot"
      />
      <p>Here are my qualifications</p>
      
      <ul style= {{textAlign: "left"}}>
        {props.qualifications.map((qual) =>( 
          <li key={qual.id}>{qual.title}</li>)
        )}
      </ul>
    </section>
  );
}

const qualifications = [
  "Java, JavaScript",
  "MS Office 2016, 2019",
  "and so on"
];

const qualObjects = qualifications.map((qual, i) =>({id: i, title: qual}));
console.log(qualObjects)

function App() {
  const [what, setWhat] = useState("happy");

  useEffect(()=>{
    console.log(`Its's ${what} around here!`);
  },[what]);
  console.log(what);
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header name="Uzochukwu" />
          
          <Route exact path="/" render={props => (
            <>
              <Main adjective="about" qualifications={qualObjects}/>
              <h1>Hello!, I is {what}.</h1>
              <button onClick={()=> setWhat("frustrated")}>
              Frustrate
              </button>
            </>
          )}/>   
          <Route path="/about" component={About} />  
          <Route path="/resume" component={Resume} />       
          
          <Footer year={new Date().getFullYear()}/>
        </div>
      </div>
    </Router>
  );    
}

export default App;