import React from 'react'

export default function Homeelevator() {
  return (
    <div>
       <section className="homeele-with-images">
      <div className="homeele-content">
        <h2 style={{color:"#3b9ebe"}}>HOME <span style={{color:"white"}}>ELEVATORS</span></h2>
        <p style={{color:"white"}}>Today, an Elevator in your home has become a necessity. Whether it be for elders or
youngsters – our residential elevators add convenience and quality to your home.
Customized to suit your aesthetics and size, our residential elevators can easily
integrate into new or existing homes.</p>
      </div>
      <div className="homeele-images">
        <img src="images/home-1.jpeg" alt="Image 1" />
        <img src="images/home-2.jpeg" alt="Image 2" />
        <img src="images/home-3.jpeg" alt="Image 3" />
      </div>
      <div className="homeele-images">
        {/* <img src="image4.jpg" alt="Image 4" />
        <img src="image5.jpg" alt="Image 5" /> */}
      </div>
    </section>
    </div>
  )
}
