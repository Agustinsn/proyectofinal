import React from 'react';
import { Carousel } from 'react-bootstrap'

import image1 from '../img/img1.jpg'
import image2 from '../img/img2.jpg'
import image3 from '../img/img3.jpg'

const CarouselContainer = () => {
 
  return (
    <Carousel fade={true} pause={false} 
    className="d-block mx-auto pt-5"
    style={{maxWidth:'700px', maxHeight:'700px',boxShadow:'5px 5px 5px grey'}}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block"
          src={image1}
          alt="First slide"
          style={{Height:'100%', maxWidth:'100%'}}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block"
          src={image2}
          alt="Third slide"
          style={{Height:'100%', maxWidth:'100%'}}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block"
          src={image3}
          alt="Third slide"
          style={{Height:'100%', maxWidth:'100%'}}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;