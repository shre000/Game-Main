import React from 'react'
import '../../Comp-style/topbar2.css'
import Bell from './Bell';

const Topbar2 = () => {
  return (
    <div>
      <div className="container-fluid top-section">
        <p className='text-center py-2'><span>User Number ~ 98927827237 </span><br />
          <span> ID ~ 12342</span>
        </p>

        <div className="row">
          <div className="one">
            <center><span className='text-center mt-2 '>Available Balance</span><br />
              <span><button type="" className=" btn bg-purple text-light mb-4">&#x20B9;&nbsp;643.4</button></span></center>



          </div>
          <div className="two">
            <div className='position-absolute'>
            <Bell/>
            </div>
            {/* <center className='my-4'><span className='recharge fs-5'>Recharge</span> &nbsp; &nbsp; <span className='withdraw fs-5'>Withdraw</span> </center>
              */}
           
            <div className="recharge text-center ">
              <button type="button" className='btn btn-purple'> Recharge</button>
            </div>
            <div className="withdraw text-center mt-2 ">
              <button type="button" className='btn btn-purple'> <span>Withdraw</span></button>
            </div>
          </div>
         
         

        </div>

      </div>
    </div>
  )
}

export default Topbar2;
