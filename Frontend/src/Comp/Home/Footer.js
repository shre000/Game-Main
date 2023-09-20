import React from 'react'
import '../../Comp-style/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      <div className="container-fluid fixed-bottom bg-light "> <hr />
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <Link to={'/'} tabIndex={1}> <i className="fa-solid fa-house fa-bounce "><br />Home</i></Link>
              {/* <p>Home</p> */}
            </div>
            <div className="col-4  text-center ">
              <Link to={'/search'} tabIndex={2}> <i className="fa-solid fa-search fa-bounce"><br />Search</i></Link>
              {/* <p>Search</p> */}
            </div>
            <div className="col-4  text-center">
             <Link to={'/login'} tabIndex={3}> <i className="fa-regular fa-address-book fa-bounce"><br />My</i></Link>
              {/* <p>My</p> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
