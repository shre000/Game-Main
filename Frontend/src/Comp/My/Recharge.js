import React from 'react'
import { useState } from "react";

import { Link } from 'react-router-dom'

const Recharge = () => {
    const [selectedAmount, setSelectedAmount] = useState(''); //
    const handleAmountButtonClick = (amount) => {
        setSelectedAmount(amount);
    };
    const handleRechargeClick = () => {
        // Check if a payment method is selected
        if (selectedPaymentMethod) {
            // TODO: Initiate payment using the selected payment method
            // You will need to use the payment gateway SDK here.
        } else {
            // Handle the case where no payment method is selected
            alert('Please select a payment method.');
        }
    };

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
                    <input type="amount" id="recharge-amount" className="form-control"  value={selectedAmount} onChange={(e) => setSelectedAmount(e.target.value)} placeholder='Enter or select recharge amount' />
                </div>
            </div>
            <div className="row text-center ">
                <div className="  col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'onClick={() => handleAmountButtonClick(100)} >100</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'onClick={() => handleAmountButtonClick(300)}>300</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'onClick={() => handleAmountButtonClick(500)}>500</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4'onClick={() => handleAmountButtonClick(1000)}>1000</button>
                </div>
                <div className="col-sm-2 my-2">
                    <button className='btn btn-warning fs-4' onClick={() => handleAmountButtonClick(2000)}>2000</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4' onClick={() => handleAmountButtonClick(5000)}>5000</button>
                </div>
                <div className="l col-sm-2 my-2">
                    <button className='btn btn-warning fs-4' onClick={() => handleAmountButtonClick(10000)}>10000</button>
                </div>
                <div className=" col-sm-2 my-2">
                    <button className='btn btn-warning fs-4' onClick={() => handleAmountButtonClick(50000)}>50000</button>
                </div>


            </div>
            <hr />
            <div className='my-3'>

            </div>
            <div className="form-check mx-5 text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label mx-5" for="flexRadioDefault1">
                        Default radio
                    </label> <hr />
            </div>
            <div className="form-check mx-5 text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label mx-5" for="flexRadioDefault2">
                        Default checked radio
                    </label> <hr />
            </div>
            <div className="form-check mx-5 text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label mx-5" for="flexRadioDefault2">
                        Default checked radio
                    </label> <hr />
            </div>
            <div className='text-center my-2'>
                <button className='btn btn-purple' onClick={handleRechargeClick}>Recharge</button>
            </div>
        </div>
    )
}

export default Recharge
