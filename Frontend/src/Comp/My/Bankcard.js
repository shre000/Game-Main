import React from 'react'
import { Link } from 'react-router-dom'

const Bankcard = () => {
    return (
        <div>
            <div className='promotion-outer p-2'>
                <Link className='promotion-outer' to={'/login-dashboard'}><span> <i className="fa-solid fa-arrow-left fa-beat"></i> &nbsp;Bank Card</span></Link>
            </div>
            <div className='mx-5 text-end '><Link to={'/addbank'}><i class="fa-solid fa-plus fa-beat "></i>&nbsp;(Add your Card)</Link></div>
        </div>
    )
}

export default Bankcard
