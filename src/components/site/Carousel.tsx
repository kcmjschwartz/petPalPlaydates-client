import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import hedgiePic from "../../assets/liudmyla-denysiuk-iJ9o00UeAWk-unsplash.jpg";
import guineaPic from "../../assets/bonnie-kittle-MUcxe_wDurE-unsplash.jpg";
import bunnyPic from "../../assets/sandy-millar-HoZtQxSpaqo-unsplash.jpg"



const CarouselView =() =>{
    return(
        <Carousel fade>
  <Carousel.Item interval={7000}>
    <img
      className="d-block w-100"
      src={hedgiePic}
      alt="HedgeHog"
    />
   </Carousel.Item>
  <Carousel.Item interval={7000}>
    <img
      className="d-block w-100"
      src={guineaPic}
      alt="Guinea Pig"
    />
  </Carousel.Item>
  <Carousel.Item interval={7000}>
    <img
      className="d-block w-100"
      src={bunnyPic}
      alt="Bunny"
    />
    </Carousel.Item>
</Carousel>
      

    )
}

export default CarouselView;