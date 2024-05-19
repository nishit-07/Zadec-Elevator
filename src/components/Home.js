import React, { useState, useEffect ,useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {

  const settings = {
   
   
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,         
      autoplaySpeed: 3000,
    
  };
  const slides = [
    { id: 1, src: 'https://expresselevators.info/wp-content/uploads/2023/10/Home-elevators.jpg', text: 'HOME ELEVATOR'},
    { id: 2, src: 'https://expresselevators.info/wp-content/uploads/2023/10/Hydraulic-elevators.jpg', text: 'HYDRAULIC ELEVATOR' },
    { id: 3, src: 'https://expresselevators.info/wp-content/uploads/2023/10/Capsule-elevators.jpg', text: 'CAPSULE ELEVATOR' },
    { id: 4, src: 'https://expresselevators.info/wp-content/uploads/2023/10/Manual-door-elevators.jpg', text: 'COMMERCIAL ELEVATOR' },
    { id: 5, src: 'https://expresselevators.info/wp-content/uploads/2023/10/Hospital-elevators.jpg', text: 'HOSPITAL ELEVATOR' },
    { id: 6, src: 'https://expresselevators.info/wp-content/uploads/2023/10/Goods-elevators.jpg', text: 'GOODS ELEVATOR' },
  ];
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
     <div class="vd-container">
  <video class="video"  autoplay muted loop>
    <source src="images/Zadec Lift Open.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
  <div class="content">
    <h2>Your Header Here</h2>
    <p>Your paragraph content goes here. This content will be left-aligned.</p>
  </div>
</div>
      <section>
        <div className='home-sec-1'>
        <div className='home-sec-1-image'>
        <img src='/images/abt2.jpg' alt="dd" />
        </div>
        <div className='home-sec-1-desc'>
            <h1>WELCOME TO <br/>
                <span style={{color:"#3b9ebe"}}>ZADEC ELEVATOR </span></h1>

                <h5>We are initiated by experienced professionals Vasu Patel and Chintan
Patel. <span style={{color:"#3b9ebe"}}>ZADEC ELEVATOR</span> teams can be denoted by the complete
range of lifts and other lift services across the domestic market. Our
expertise in large infrastructure and demanding high-rise projects makes
us a perfect match for the key growth sector in the Indian construction
industry </h5>
                <h5>Our promise to offer you the very best in lifts and better service can be
given every time with our team and other professionals. We have been
able to satisfy our clients for every year together. Our main object is to
provide independent and better service for our connected clients</h5>
                <h5>Our main goal with every customer is to instill a deep sense of trust that
we are with them whenever and wherever they need us by providing our
best attention and services every day.</h5>
        </div>
        </div>
      </section>

      <div className='home-sec-2'>
        <div className='home-sec-box'>

    <div className='box-1'>
    <div className='box-1-image'>
        <img 
          src='/images/eye (1).png' 
          alt='Eye Image'
          style={{
            transition: 'transform 0.3s ease-in-out ',
          }}
          className='hover-up'
        />
    </div>
    <div className='box-1-t'>
        <h3>Core Purpose</h3>
        <p>To enhance the efficiency and productivity of ecosystem, joyfully by providing cutting edge solutions.</p>
    </div>
    </div>

    <div className='box-2'>
        <div className='box-2-image'>
    <img src='/images/mission.png'
    style={{
        transition: 'transform 0.3s ease-in-out ',
      }}
      className='hover-up'
      />
        </div>
        <div className='box-2-t'>
        <h3>Our Goal</h3>
        <p>Give the best service and
experience to our clients.
Build good relations with.</p>
    </div>
    </div>

    <div className='box-3'>
        <div className='box-3-image'>
    <img src='/images/values.png'
    style={{
        transition: 'transform 0.3s ease-in-out ',
      }}
      className='hover-up'
      />
        </div>
        <div className='box-3-t'>
        <h3>Core Values</h3>
        <p>Quality | Innovative | Trust/Integrity/ Safety responsibility | Customer success | Continuous improvement</p>
    </div>

    </div>
        </div>
      </div>

      <section >
        <div className='home-sec-3'>
        <h1>SOLUTIONS FOR NEW BUILDING</h1>
                <p style={{textAlign:"center"}}><span style={{color:"#3b9ebe"}}>Zadec Elevator</span> Presents top-tier elevators.Explore our product details below for further insights.</p>
            <div className='home-sec-3-box'>
                
                <div className='home-sec-3-box-1'>
                    
                <div className='home-sec-3-box-1-image'>
                <img src='/images/elevator.png'  className='hover-up' style={{
        transition: 'transform 0.3s ease-in-out ',
      }}/>
                </div>
                <div className='sec-3-box-1-t'>
                <h3>ELEVATORS</h3>
                <p>Elevate your thoughts, ascend your goals, and ride the elevator of ambition to new heights.</p>
                </div>
                </div>

                <div className='home-sec-3-box-2'>
                <div className='home-sec-3-box-2-image'>
                <img src='/images/components.png'  className='hover-up' style={{
        transition: 'transform 0.3s ease-in-out ',
      }}/>

                </div>
                <div className='sec-3-box-2-t' >
                <h3>ACCESSORIES</h3>
                <p>In the world of elevators, each component plays a crucial role - from buttons to cables, working together to lift us higher.</p>
                </div>
                </div>

            </div>

        </div>
      </section>



      <section>
        <div className='home-sec-4'>
          <div className='home-sec-4-t'>
            <h1>WHY CHOOSE US</h1>
            <p>Our journey has been defined by a relentless commitment to excellence. </p>
          </div>
        <div className='home-sec-box'>

<div className='home-sec-4-box-1'>
<div className='home-sec-4-box-1-image'>
    <img 
      src='images/carpentry.png' 
      alt='Eye Image'
      style={{
        transition: 'transform 0.3s ease-in-out ',
      }}
      className='hover-up'
    />
</div>
<div className='home-sec-4-box-1-t'>
    <h5>GREAT CRAFTSMANSHIP</h5>
    
</div>
</div>

<div className='home-sec-4-box-2'>
    <div className='home-sec-4-box-2-image'>
<img src='/images/vehicle.png'
style={{
    transition: 'transform 0.3s ease-in-out ',
  }}
  className='hover-up'
  />
    </div>
    <div className='home-sec-4-box-2-t'>
    <h5>EXTENSIVE SERVICES</h5>
    
</div>
</div>

<div className='home-sec-4-box-3'>
    <div className='home-sec-4-box-3-image'>
<img src='/images/safety-at-work.png'
style={{
    transition: 'transform 0.3s ease-in-out ',
  }}
  className='hover-up'
  />
    </div>
    <div className='home-sec-4-box-3-t'>
    <h5>SAFETY FIRST</h5>
    
</div>
</div>


<div className='home-sec-4-box-4'>
    <div className='home-sec-4-box-4-image'>
<img src='/images/reliability.png'
style={{
    transition: 'transform 0.3s ease-in-out ',
  }}
  className='hover-up'
  />
    </div>
    <div className='home-sec-4-box-3-t'>
    <h5>GUARANTEED QUALITY</h5>
    
</div>
</div>
    </div>
    
        </div>
      </section>
      <div className="home-sec-5">
      <h2>OUR PRODUCT RANGE</h2>
      <h4>An Amazing Solution For All Elevators need!</h4>
      <div className="slider-container" onClick={handleClick}>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img src={slide.src} alt={`Slide ${slide.id}`} />
              <div className="image-text-box">
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

    </div>
  )
}
