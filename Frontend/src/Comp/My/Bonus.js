import React from 'react'
import { Link } from 'react-router-dom'
import '../../Comp-style/bonus.css'

const Bonus = () => {
    return (
        <div>
            <div className="bonus w-100">
               
                   <div className='bonus-inner py-2 px-2'>
                   <Link to={'/login-dashboard'} ><span> <i className="fa-solid fa-arrow-left "></i> &nbsp;Bonus Record</span></Link>
                   </div>
                
                <div className='text-center bonus-inner py-4'>
                    <p><span className='text-underline'>Level 1</span> &nbsp; <span>Level 2</span></p>

                </div>
                <div className='text-center py-1'>
                    <p>No data available</p>
                   
                </div>
                <hr /> 
            </div>
        </div>
    )
}

export default Bonus
