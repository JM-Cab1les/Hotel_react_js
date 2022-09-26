import React from 'react'
import "./download.css"

const Download = () => {
  return (
        <>
            <section className='download top'>
                <div className='container flex_space'>
                    <div className='row'>
                        <h3>Download Our App</h3>
                        <h1>Wow! Get this App in Mobile</h1>
                        <ul>
                            <li>&#10003; Find nearby hotel in your network</li>
                            <li>&#10003; Get Paperless confirmation</li>
                            <li>&#10003; Make change whenever, wherever</li>
                            <li>&#10003; 24/7 customer service in more than 40 languages</li>
                            <li>&#10003; No booking or credit card fees</li>
                            <li>&#10003; Add your own review and photos</li>
                            
                        </ul>
                        <div className='img flex'>
                            <img src='/image/appstore-button.png' alt='' />
                            
                        </div>
                    </div>
                    <div className='row row2'>
                        <img src='/image/app-image-1.png' alt=''/>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Download