import React from 'react'
import { Link } from 'react-router-dom'
import '../../Comp-style/bonus.css'

const Promotion = () => {
    return (
        <div>
            <div className='promotion-outer p-2 '>
                <Link className='promotion-outer' to={'/login-dashboard'}><span> <i className="fa-solid fa-arrow-left "></i> &nbsp;Promotion</span></Link>
            </div>
            <div className='text-center py-2'>
                <div>
                    Bonus:	&#8377;0
                </div>
                <div>
                    <button className='btn btn-orange my-2'>Apply to balance</button>
                </div>
                <hr />
                <div>
                    <div className="row">
                        <div className="col text-center fs-6 mx-2">
                            Total People <br /> 1
                        </div>
                        <div className="col text-center mx-2 fs-6">
                            Contribution <br /> 0
                        </div>
                    </div>
                    <div className='text-start my-3 mx-5 '>
                        <p>My Promotion Code <br /> 132424 </p>
                    </div>
                    <hr />
                    <div className='text-start my-3 mx-5 '>
                        <p>My Promotion Link <br />https://www.game.co/#/pages/person/promotion r_code132424  </p>
                    </div>
                    <hr />
                    <div>
                        <button className='btn btn-orange mx-3'>Copy link</button>
                        <button className='btn btn-orange'>Open link</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Promotion
