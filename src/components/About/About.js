import React from 'react';
import './About.css';
import Aboutcard from './Aboutcard'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Footer from '../Homesection/Footer/Footer';

const About = () => {
  return (
    <>  
        <HeadTitle/>
        <section className='about top'>
            <div className='container'>
                <Aboutcard/>
            </div>
        </section>

        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>
                        Our <span>Features</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>  
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    <img src='./image/feature-img-1.jpg' alt='' />
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default About