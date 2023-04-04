import ImageSlider from "./ImageSlider"
import "./App.css"; 

const Home = () => {
    return(
        <div>
        <div className="pagecontainer">

        <h1 className="header">
        Home
        </h1>
        <br/>
        <br/>


        <div className="body">
        <div className="info">
        <div>
            Jacksonville, FL     &#8226;    904-238-5282    &#8226;    riversideautodetailers@gmail.com
        </div>
        </div>


        <br/><br/>

        <br/>
        <div className="intro">
        <div>
            Hello!  
        </div>
        <br/>
        <div>
            Thanks for choosing Riverside Auto Detailng
        </div>
        <br/>
        <div>If you'd like to
            see the type of packages we offer</div>
        <br/>
        <div>visit our services tab</div>
       </div>
        <br/>
        </div>
        </div>
        <br/>

        <br/>
        <ImageSlider/>
        </div>
        
    )
}

export default Home

