import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';


const Withdrawl = () => {
    return (
        <div>
            <div className='promotion-outer p-2'>
                <Link className='promotion-outer' to={'/login-dashboard'}><span> <i className="fa-solid fa-arrow-left "></i> &nbsp;Withdrawl</span></Link> <Link to={'/withdrawl_record'}><span className='withdrawl-record-icon'>  <i class="fa-solid fa-money-bill-transfer "></i>&nbsp; Record</span></Link>
            </div>
            <div className='text-center fs-5 my-2'>
                Balance :&#8377; 643.4
            </div>
            <div >
                <div className="form-outline py-3">
                    <input type="amount" id="withdrawl-amount" className="form-control" placeholder='Please enter withdrawl amount' />
                </div>
                <div className="form-outline py-3">
                    <div>Payout</div>
                    <div className='m-2'></div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fa-solid fa-wallet "></i>&nbsp;Bank Card Withdrawal</Accordion.Header>
                            <Accordion.Body>
                                <Link to={'/wbank'}>Add Bank</Link>
                            </Accordion.Body>
                           

                        </Accordion.Item>
                        <div className='m-2'></div>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fa-solid fa-wallet "></i>&nbsp;Upi Withdrawal</Accordion.Header>
                            <Accordion.Body>
                                <Link to={'/wupi'}>Add Upi</Link>
                            </Accordion.Body>
                           

                        </Accordion.Item>
                    </Accordion>
                    <div className='m-3'></div>
                <label className="form-label my-2" for="withdrawl-password">Enter your login password</label>
                    <input type="amount" id="withdrawl-password" className="form-control" placeholder='password' />
                </div>
            </div>
            <div className='my-2 text-center'>
                <button className="btn btn-purple">Withdrawl</button>
            </div>

        </div>
    )
}

export default Withdrawl
