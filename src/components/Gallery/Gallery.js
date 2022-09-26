import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './Gallery.css'
import Card from './Card'
import GalleryData from './GalleryData';
import Footer from '../Homesection/Footer/Footer';

const Gallery = () => {
  return (
        <>
            <HeadTitle/>
            <section className='gallery top'>
                <div className='grid gallery-container'>
                    {
                        GalleryData.map((value) =>{
                            return <Card image={value.img} title={value.title}/>
                        })
                        }
                </div>
            </section>
            <Footer/>
        </>
  )
}

export default Gallery