import React from 'react'
import g1 from '../../images/g1.jpg'
import g2 from '../../images/g2.jpg'
import g3 from '../../images/g3.jpg'
import g4 from '../../images/g4.avif'
import '../../Comp-style/cards.css'

const Cards = () => {
    return (
        <div>
            <div className="mx-3 py-2">
                <div className="row">
                    <div className="col-lg-6">
                        <figure className="figure mx-2 shadow-lg p-3 mb-5 bg-light rounded ">
                            <img src={g1}className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dicta?</figcaption>
                            <span>&#x20B9;&nbsp;1249</span>
                        </figure>
                    </div>
                    <div className="col-lg-6 ">
                        <figure className="figure shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={g2}className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus.</figcaption>
                            <span>&#x20B9;&nbsp;6578</span>
                        </figure>
                    </div>
                    <div className="col-lg-6 ">
                        <figure className="figure shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={g3}className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus.</figcaption>
                            <span>&#x20B9; &nbsp;5674</span>
                        </figure>
                    </div>
                    <div className="col-lg-6 ">
                        <figure className="figure shadow-lg p-3 mb-5 bg-white rounded">
                            <img src={g4}className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus..</figcaption>
                            <span> &#x20B9;&nbsp;3421</span>
                        </figure>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cards;
