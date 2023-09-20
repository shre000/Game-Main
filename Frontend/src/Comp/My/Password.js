import React from 'react'
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <>
    <div className="container py-4">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <p className="nav-link bg-warning  bg-purple" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
            aria-controls="pills-login" aria-selected="true">Reset Password</p>
        </li>

      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            <div className="text-center mb-3" />


            {/* <!-- Mobile number --> */}
            <div className="form-outline mb-2">
              <input type="text" id="registerMobilenumber" class="form-control" />
              <label className="form-label" for="registerMobilenumber">Mobile number</label>
            </div>

            {/* <!-- Verification Code --> */}
            <div class="form-outline mb-2">
              <input type="text" id="registerVerificationcode" class="form-control" />
              <label class="form-label" for="registerVerificationcode">Verification Code</label>
            </div>

         

            {/* <!-- Password input --> */}
            <div class="form-outline mb-2">
              <input type="password" id="registerPassword" class="form-control" />
              <label class="form-label" for="registerPassword">New Password</label>
            </div>
        
            {/* <!-- Submit button --> */}
            <center> <Link to={'/login'}><button type="submit" className="btn btn-purple  btn-block mb-5 mt-2 mx-5">Continue</button></Link></center>
          </form>
        </div>
      </div>
    </div>
    <br />
   
  </>

  )
}

export default Password
