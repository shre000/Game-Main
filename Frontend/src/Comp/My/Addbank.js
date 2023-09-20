import React from 'react'
// import { Link } from 'react-router-dom'
import Selectbank from './Selectbank'

const Addbank = () => {
    return (
        <div>
            {/* <div className='bonus-inner p-2'>
                <Link className='promotion-outer' to={'/bankcard'}><span> <i className="fa-solid fa-arrow-left fa-beat"></i> &nbsp;Add Bank</span></Link>
            </div>
            <div className='text-center bonus-inner py-4'>
                    <p><span className=''><Link to={'/selectbank'}>Select Bank Card</Link></span> &nbsp; <span>Select Upi</span></p>

                </div> */}
        <Selectbank/>
          
        </div>
    )
}

export default Addbank
