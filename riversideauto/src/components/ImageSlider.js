import { useState } from "react";
import "./App.css"; 
import one from "../radPictures/IMG_2763.jpg";
import two from "../radPictures/IMG_2771.jpg";
import three from "../radPictures/IMG_2772.jpg";
import four from "../radPictures/IMG_2774.jpg";
import five from "../radPictures/IMG_2775.jpg";



const ImageSlider = () => {

  const slides = [
    {'url': one , 'title' : '1'},
    {'url': two, 'title' : '2'},
    {'url': three, 'title' : '3'},
    {'url': four, 'title' : '4'},
    {'url': five, 'title' : '5'}
  ]

  const [currentIndex,setCurrentIndex] = useState(0)
  console.log(` current index: ${slides[currentIndex].url} so ya` ) 

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)

  }


  return(<div className="containerStyles">
    
      <div style={
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${slides[currentIndex].url})`,
          alignItems: "center"
        }
        }>
      <div className="rightArrow" onClick={goToPrevious}>&#x203A;</div>
      <div className="leftArrow" onClick={goToNext}>&#x2039;</div>
      </div>
      </div>
    )
  }

  export default ImageSlider