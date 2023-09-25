import React from 'react'
import { Link } from 'react-router-dom'

const Upi = () => {
    return (
        <div>
            <div className='bonus-inner p-2'>
                <Link className='promotion-outer' to={'/bankcard'}><span> <i className="fa-solid fa-arrow-left fa-beat"></i> &nbsp;Add Bank</span></Link>
            </div>
            <div className='text-center bonus-inner py-4'>
                <p><span className=''><Link to={'/selectbank'}>Select Bank Card</Link></span> &nbsp; <span><Link to={'/selectupi'}>Select Upi</Link></span></p>

            </div>



            <div className="form-outline my-3 py-1">
                <input type="text" id="actual-name" className="form-control" placeholder='Actual Name' />
            </div>
            <div className="form-outline py-1 mb-1">
                <input type="text" id="upi-account" className="form-control" placeholder='Upi Account ' />
            </div>
            <div className="form-outline py-1 mb-1">
                <input type="phone" id="phone-number" className="form-control" placeholder='Phone number' />
            </div>
            <div className="form-outline py-1 mb-2">
                <input type="email" id="email" className="form-control" placeholder='Email' />
            </div>
            {/* <div className='text-center py-1 mb-2 bg-dark text-light'>
                +917529927715
            </div> */}
            <div className="form-outline mb-4 py-1">
                <input type="text" id="verification-code" className="form-control" placeholder='The verification code is sent to the above' />
            </div>
            <div className="text-center mb-4">
                <button className='btn btn-purple'>Continue</button>
            </div>
        </div>
    )
}

export default Upi
