import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import annies from '../Shared/Const/Constant'
const MyCorousalComp = () => {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={annies.neymar} alt='neymar'></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={annies.messi} alt='messi' ></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={annies.suarez} alt='suarez'></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCorousalComp
