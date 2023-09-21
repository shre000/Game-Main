import React from 'react'
import '../../../Comp-style/wintopbar.css'
import Readrules from '../../My/Win Components/Readrules'
import { Link } from 'react-router-dom'

const WinTopbar = () => {
  return (
    <div>
    <div className="container-fluid ts py-4"> 
      <div className="row">
        <div className="wc1">
          <center><span className='text-center mt-2 '>Available Balance</span><br />
            <span><button type="" className=" btn bg-purple text-light mb-4">&#x20B9;&nbsp;643.4</button></span></center>



        </div>
      
        <div className="wc2 ">
          {/* <center className='my-4'><span className='recharge fs-5'>Recharge</span> &nbsp; &nbsp; <span className='withdraw fs-5'>Withdraw</span> </center>
            */}
          <div className="recharge text-center ">
            <Link to={'/recharge'}><button type="button" className='btn btn-purple'> Recharge</button></Link>
          </div>
          <div className="withdraw text-center mt-2 ">
            {/* <button type="button" className='btn btn-purple'> <span>Rules</span></button> */}
            <Readrules/>
          </div>

        </div>
        <div>
        <div className='iconp'>
        <i class="fa-solid fa-arrows-rotate "></i>
        </div>
        </div>

      </div>

    </div>
  </div>
  )
}

export default WinTopbar
