import React from 'react'
import { Link } from 'react-router-dom';
import '../../Comp-style/logfooter.css'

const Logfooter = () => {
  return (
    <div>

    <div className="container-fluid fixed-bottom bg-light mt-2"> <hr />
      <div className="container">
        <div className="row">
          <div className="col-3 text-center">
            <Link to={'/home2'} tabIndex={1}> <i className="fa-solid fa-house fa-bounce "><br />Home</i></Link>
            {/* <p>Home</p> */}
          </div>
          <div className="col-3  text-center ">
            <Link to={'/search2'} tabIndex={2}> <i className="fa-solid fa-search fa-bounce"><br />Search</i></Link>
            {/* <p>Search</p> */}
          </div>
          <div className="col-3  text-center ">
            <Link to={'/win'} tabIndex={3}> <i class="fa-solid fa-trophy fa-bounce"><br />Win</i></Link>
            {/* <p>Search</p> */}
          </div>
          <div className="col-3  text-center">
           <Link to={'/my2'} tabIndex={4}> <i className="fa-regular fa-address-book fa-bounce"><br />My</i></Link>
            {/* <p>My</p> */}

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Logfooter;
