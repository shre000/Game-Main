import React from 'react'
import { Link } from 'react-router-dom'

const Recharge = () => {
    return (
        <div>

            <div className='promotion-outer p-2'>
                <Link className='promotion-outer' to={'/login-dashboard'}><span> <i className="fa-solid fa-arrow-left "></i> &nbsp;Recharge</span></Link> <Link to={'/recharge_record'}><span className='recharge-record-icon'><i className="fa-solid fa-bolt"></i>&nbsp; Record</span></Link>
            </div>
            <div className='text-center fs-5'>
                Balance :&#8377; 643.4
            </div>
            <div className='align-content-lg-start '>
                <div className="form-outline py-3">
                    <input type="amount" id="recharge-amount" className="form-control" placeholder='Enter or select recharge amount' />
                </div>
            </div>
            <div className="row text-center ">
                <div className="  col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>100</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>300</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>500</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>1000</button>
                </div>
                <div className="col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>2000</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>5000</button>
                </div>
                <div className="l col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>10000</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'>50000</button>
                </div>


            </div>
            <div>
                <div class="list-group text-center my-3">
                   
                    <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button> 
                    <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                    <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                  
                </div>
            </div>
            <div className='text-center my-2'>
                <button className='btn btn-purple'>Recharge</button>
            </div>
        </div>
    )
}

export default Recharge
