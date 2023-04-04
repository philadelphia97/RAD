import { form } from "react-router-dom";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Services = ({setSubmit}) => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('');
    const [date,setDate] = useState(new Date());
    const [serv,setServ] = useState('not selected')
    const form = useRef()
    


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5d8w80i', 'template_jfxv0zh', form.current, 'BzXt2mZcmx9KHCBfH')
        .then((result) => {
        console.log(`form : ${form}`);

        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    const handleClick = (service) => {
        
        console.log(`you have selected ${service}`)
        setServ(service)
    }
    
 
    return (
        
        <div>

    <h1 className="header">
        Services
        
    </h1>
    
   
    <div  id="service">
    <button  onClick={() => handleClick('Basic Carwash')}>
        <h3>Basic Carwash + Interior Clean:</h3>
        <br/>
        <li>Foam Bath + Pressure Wash Exterior</li>
        <li>Hand Wet Wax</li>
        <li>Vacuum Entire Interior (Cabin, Trunk, Under Seats, Compartments)</li>
        <li>Wipe Down All Interior Surfaces (Cup Holders, Door Jams, Air Vents, Dash)</li>
        <li>Top Off Wiper Fluid</li>
        <li>Clean Windows</li>
        <li>5 Pack of RAD Air Fresheners :0</li>
        <br/>
        <ul className="price">$80-$140</ul>
        <br/>
        <ul className="disclaimer"> Price dependent on vehicle size</ul>
      
        
    </button>

    <button  onClick={() => handleClick('Full Interior Works')}>
    <h3>Full Interior Works</h3>
        <br/>
        <li>Vacuum Entire Interior (Cabin, Trunk, Under Seats, Compartments)</li>
        <li>Deep Carpet Clean With a Carpet Extractor (Great for Deep Stains and Smells)</li>
        <li>Leather Conditioning / Cloth Shampoo</li>
        <li>Wipe Down All Interior Surfaces (Cup Holders, Door Jams, Air Vents, Dash)</li>
        <li>Steam Sanitization</li>
        <li>Top Off Wiper Fluid</li>
        <li>Clean Windows</li>
        <li>5 Pack of RAD Air Fresheners :0</li>
        <br/>
        <ul className="price">$160-$250</ul>
        <br/>
        <ul className="disclaimer"> Price dependent on vehicle size</ul>
        
    </button>
    <button  onClick={() => handleClick('Full Throttle')} >
    <h3>Full Throttle</h3>
        <br/>
        <li>Foam Bath + Pressure Wash Exterior</li>
        <li>Clay Bar Exterior</li>
        <li>Hand Wet Wax</li>
        <li>Wheel Detail and Tire Shine</li>
        <li>Plastic Restorer on All Exterior Trim</li>
        <li>Undercarriage Pressure Wash</li>
        <li>Fenderliner Detail</li>
        <li>Vacuum Entire Interior (Cabin, Trunk, Under Seats, Compartments)</li>
        <li>Deep Carpet Clean With a Carpet Extractor (Great for Deep Stains and Smells)</li>
        <li>Leather Conditioning / Cloth Shampoo</li>
        <li>Wipe Down All Interior Surfaces (Cup Holders, Door Jams, Air Vents, Dash)</li>
        <li>Steam Sanitization</li>
        <li>Top Off Wiper Fluid</li>
        <li>Clean Windows</li>
        <li>5 Pack of RAD Air Fresheners :0</li>
        <br/>
        <ul className="price">$220-$350</ul>
        <br/>
        <ul className="disclaimer"> Price dependent on vehicle size</ul>
        
    </button>
    
    </div>

    <div>
        <h1 className="header">
        Schedule your Detail!
        </h1>
        <br/>
        <br/>
        </div>

        <div className="formcontainer">
        <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="formstyle">Selected Service: { serv } </div>
            <br/>
            <div className="formstyle">Selected Date: {`${date}`} </div>
            <br/>
            <input 
            className="contact" type="text"
            placeholder="Name"
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
            required 
            />
            
            {console.log(name)}
            
            <input 
            type='date'
            value={date} 
            name='date'
            onChange={(e) => setDate(e.target.value)}>
            </input>

            <input 
            className="contact"
            placeholder="Email"
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required />


            {console.log(email)}
            {console.log(date)}

            
    
        
            <button 
            className="submit" 
            type="submit"
            onClick={() => setSubmit(true)}>
            Send message
            </button>
        </form>
        </div>

    


    </div>
    )
}

export default Services;