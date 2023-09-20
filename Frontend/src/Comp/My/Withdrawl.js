import React from 'react'
import { Link } from 'react-router-dom'

const Withdrawl = () => {
    return (
        <div>
            <div className='promotion-outer p-2'>
                <Link className='promotion-outer' to={'/login-dashboard'}><span> <i className="fa-solid fa-arrow-left fa-beat"></i> &nbsp;Withdrawl</span></Link>
            </div>
            <div className='text-center fs-5 my-2'>
                Balance :&#8377; 643.4
            </div>
            <div >
                <div className="form-outline py-3">
                    <input type="amount" id="withdrawl-amount" className="form-control" placeholder='Please input number' />
                </div>
                <div className="form-outline py-3">
                    <div>Payout</div>
                <label className="form-label" for="withdrawl-password">Enter your login password</label>
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
