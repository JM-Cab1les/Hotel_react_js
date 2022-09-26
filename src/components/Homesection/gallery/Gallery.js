import React from 'react'
import Data from './data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css"; 

const Gallery = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 5000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
            }
        ]
    }
  return (
        <>
        
            <section className='collection'>
                <div className='container top'>
                <Slider {...settings}>
                    {Data.map((value)=>{
                        return (
                            <div className='box'>
                                <img src={value.cover} alt=''/>
                            </div>
                        )
                    })}
                </Slider>
                </div>
            </section>
            
        </>
  )
}

export default Gallery