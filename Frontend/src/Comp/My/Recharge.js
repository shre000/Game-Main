import React from 'react'
import { useState, useEffect} from "react";
import { loadScript } from './loadScript';

import { Link } from 'react-router-dom'

const Recharge = () => {
    const [selectedAmount, setSelectedAmount] = useState('');

    const handleAmountButtonClick = (amount) => {
        setSelectedAmount(amount);
    };

    const handleRechargeClick = () => {
        // Check if a payment method is selected
        if (selectedAmount) {
            initializeRazorpay();
        } else {
            alert('Please select an amount to recharge.');
        }
    };

    const initializeRazorpay = () => {
        if (window.Razorpay) {
            const options = {
                key: 'rzp_test_GpYsVRT9YxF0EG', // Replace with your Razorpay API Key
                amount: selectedAmount * 100, // Amount in paise (multiply by 100)
                currency: 'INR',
                name: 'GameZone',
                description: 'Recharge',
                image: '/c4.jpg',
                handler: function (response) {
                    // Handle the payment success callback
                    alert('Payment Successful: ' + response.razorpay_payment_id);
                },
                prefill: {
                    name: '',
                    email: '',
                    contact: '',
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            alert('Razorpay is not loaded. Please try again later.');
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
                        SEPROPAY_UPI
                    </label> <hr />
            </div>
            {/* <div className="form-check mx-5 text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label mx-5" for="flexRadioDefault2">
                        Default checked radio
                    </label> <hr />
            </div> */}
            <div className="form-check mx-5 text-center">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label className="form-check-label mx-5" for="flexRadioDefault2">
                       Fastest Way
                    </label> <hr />
            </div>
            <div className='text-center my-2'>
                <button className='btn btn-orange' onClick={handleRechargeClick}>Recharge</button>
            </div>
        </div>
       
    )
}

export default Recharge
