import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Industries = () => {
    
  return (
    <div className='p-36 text-5xl font-bold bg-yellow-600 max-sm:p-20'>
      <h1>Industries <br /> We Serve ____</h1>
     
      <Carousel className='md:items-center md:ml-30 mt-10 max-sm:ml-3' autoPlay infiniteLoop centerMode interval={2000}>
                <div>
                    <img src="./images/logo.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/logo.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./images/logo.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

    </div>
  )
}

export default Industries

// <Carousel infiniteLoop slidesToShow={3}>
// <div>
//   <p>01</p>
//   <img src={"./images/logo.png"} className="w-full h-full" />
// </div>
// <div>
//   <p>02</p>
//   <img src={"./images/logo.png"} className="w-full h-full" />
// </div>
// <div>
//   <p>03</p>
//   <img src={"./images/logo.png"} className="w-full h-full" />
// </div>
// <div>
//   <p>04</p>
//   <img src={"./images/logo.png"} className="w-full h-full" />
// </div>
// <div>
//   <p>05</p>
//   <img src={"./images/logo.png"} className="w-full h-full" />
// </div>
// <div>
//   <p>06</p>
//   <img src={"3.jpeg"} className="w-full h-full" />
// </div>
// </Carousel>