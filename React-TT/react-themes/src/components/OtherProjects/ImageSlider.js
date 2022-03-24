import React, { useState } from "react";
import './ImageSlider.css'


const ImageSlider = ({slides}) =>{
    const [current, setCurrent] = useState(0);
    const length = slides.length
    
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if(!Array.isArray(slides) || length <= 0){
        return null
    } 
    return(
        <div className="main-slider-container">
        <div className="img-slider-container">
            <i class="fa-solid fa-circle-arrow-left" onClick={prevSlide}></i>
        <div className="slider">
            {slides.map((slide, index) => {
                return(
                <div className="slide-img-container">
                <div className={index === current ? 'slide active' : 'slide' } key={index}>
                    {index === current && (<img onClick={()=>{window.open(slide.image)}} src={slide.image } alt='BWW Camps' className="c-img"/>)}
                    </div>
                    </div> )
            })}
            
        </div>
        <i class="fa-solid fa-circle-arrow-right" onClick={nextSlide}></i>
        </div>
        <div className="indicator-container">
        {slides.map((slide, index)=>{
            return(
                <div className={index === current ? 'indicator active' : 'indicator' }>
                <i class="fa-solid fa-circle"></i>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default ImageSlider