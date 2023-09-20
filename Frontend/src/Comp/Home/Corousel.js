import React from 'react'
import c1 from '../../images/c1.jpg'
import c3 from '../../images/c3.jpg'
import c4 from '../../images/c4.png'
import '../../Comp-style/corousel.css'

const Corousel = () => {
  return (
    <>
      {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c4} className="d-block w-100" alt="..." />
          </div>

        </div>
      </div>
       */}
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={c1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={c3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={c4} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


    </>
  )
}

export default Corousel;
