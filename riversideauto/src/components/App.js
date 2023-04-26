import { useState } from "react";
import Home from "./home"
import  Services  from "./services";
import  Submission  from "./Submission";
import {Link, Routes, Route} from 'react-router-dom'
import NotFound from "./notfound";
import "./App.css"; 
import five from "../radPictures/RADLOGO.png";


const App = () => {

  const [submit,setSubmit] = useState(false)
   console.log(`submit in parent is set to : ${submit}`)
  
  function toggleClick(){
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    const change = navbarLinks.classList.toggle('active')
    change()
    console.log("change", change)
  }

     

  


 

  
    

return(

  (submit === true ? <Submission
    setSubmit={setSubmit}/> : 

  <div className="main">

  <div className="appContainer">

  <nav className="navbar">
  <div className="logo">
    <img style={{
      width: "250px",
      height: "230px"
     }} 
    src={five} alt='Riverside Auto Detailing Logo'>
    </img>
  </div>
  <a href="##" onClick={toggleClick} className="toggle-button">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </a>
    <ul className="navbar-links">
      <ul>
      <li>
        <Link className="link" to='/'>Home</Link>
      </li>
      <li>
        <Link className="link" to='/services'>Services</Link>
      </li>
      </ul>
      
    </ul>
  </nav>


  
 <div className="page">
<Routes>
  <Route path="/" 
         element={<Home />}
          />

  <Route path="/services" 
         element={<Services
          setSubmit={setSubmit} /> } />

  <Route path="/Submission" 
         element={<Submission
          /> } />

  <Route path="*" 
         element={<NotFound />} />
</Routes>
</div>

</div>

</div>
))
}



export default App;
