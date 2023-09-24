import React from 'react'
import { Link } from 'react-router-dom'

const Record_withdrawl = () => {
    return (
        <div>
            <div className='promotion-outer p-2'>
                <Link className='promotion-outer' to={'/withdrawl'}><span> <i className="fa-solid fa-arrow-left fa-beat"></i> &nbsp;Withdrawl Record</span></Link>
            </div>
            <div className='text-center my-3'>
                <p>No data available</p>

            </div>
            <hr />
        </div>
    )
}

export default Record_withdrawl
