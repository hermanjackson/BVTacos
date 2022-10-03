import React from 'react'
import "../../styles/slider.css"
import image1 from "../../front/images1/front.jpg"
import image2 from "../../front/images1/REALTACOS.png"
import image3 from "../../front/images1/tropicalTwist.jpg"

export const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..."/>
          
            <div className="carousel-caption d-none d-md-block">
              <h1 className='headerCap'>Dont Juice For Taste</h1>
              <h1 className='headerCap'>Juice For Benifits</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h1 className='headerCap'>Dont Juice For Taste</h1>
              <h1 className='headerCap'>Juice For Benifits</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..."/>
            
            <div className="carousel-caption d-none d-md-block">
            <h1 className='headerCap'>Juice for PH LeveL</h1>
              <h1 className='headerCap'>Juice for body functioning</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}