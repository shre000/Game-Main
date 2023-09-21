import React, { useState } from 'react'
import Footer from '../Home/Footer'
import {useNavigate} from "react-router-dom"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const [inpval, setInpval] = useState({
    registerMobilenumber: "",
    registerVerificationcode: "",
    registerRecommendationcode:"",
    registerPassword: "",
    registerRepeatPassword: ""
});

const history = useNavigate();
const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
};

const addUserdata = async (e) => {
  e.preventDefault();

  const { registerMobilenumber, registerVerificationcode, registerRecommendationcode, registerPassword,registerRepeatPassword } = inpval;

  if (registerMobilenumber === "") {
      toast.warning("fname is required!", {
          position: "top-center"
      });
  } else if (registerVerificationcode === "") {
      toast.error("referralcode is required!", {
          position: "top-center"
      });
  } else if (registerRecommendationcode === "") {
    toast.warning("recomdationcode is required!", {
        position: "top-center"
    });
} else if (registerPassword === "") {
      toast.error("password is required!", {
          position: "top-center"
      });
  } else if (typeof registerPassword === 'string' && registerPassword.length < 5) {
      toast.error("password must be 6 char!", {
          position: "top-center"
      });
  } else if (registerRepeatPassword === "") {
      toast.error("cpassword is required!", {
          position: "top-center"
      });
  }
  else if (typeof registerRepeatPassword === 'string' && registerRepeatPassword.length < 5) {
    toast.error("confirm password must be 6 char!", {
      position: "top-center"
    });
  } else if (registerPassword !== registerRepeatPassword) {
      toast.error("pass and Cpass are not matching!", {
          position: "top-center"
      });
 } else {
      console.log("user registration succesfully done");


      const data = await fetch("/register", {      
          method: "POST",
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify({
            registerMobilenumber, 
            registerVerificationcode,
            registerRecommendationcode, 
            registerPassword, 
            registerRepeatPassword
          })
      });
console.log(data);
      const res = await data.json();
      console.log(res);

      if (res.status === 201) {
        alert("Registration Successfully done 😃!");
        history("/Login");
          setInpval({ ...inpval, registerMobilenumber: "", registerVerificationcode: "",registerRecommendationcode: "", registerPassword: "", registerRepeatPassword: "" });
      }
  }
}


  return (
    <>
      <div className="container py-4">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <p className="nav-link bg-warning  bg-purple" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
              aria-controls="pills-login" aria-selected="true">Register</p>
          </li>

        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
              <div className="text-center mb-3" />


              {/* <!-- Mobile number --> */}
              {/* onChange={setVal} value ={inpval.registerMobilenumber}  */}
              <div className="form-outline mb-2">
              
              <label className="form-label" htmlFor="registerMobilenumber">Mobile Number</label>
              <input onChange={setVal} value={inpval.registerMobilenumber} className="form-control" name="registerMobilenumber" id="registerMobilenumber" placeholder='Enter Your Mobile number' />
              </div>

              {/* <!-- Verification Code --> */}
              {/*  onChange={setVal} value ={inpval.registerVerificationcode}*/}
              <div className="form-outline mb-2">
              <label className="form-label" htmlFor="registerVerificationcode">Verification code</label>
                <input onChange={setVal} value={inpval.registerVerificationcode} className="form-control" id="registerVerificationcode" name='registerVerificationcode'/>
                
              </div>

              {/* <!-- Recommendation code --> */}
              {/* onChange={setVal} value ={inpval.registerRecommendationcode}  */}
              <div className="form-outline mb-2">
              <label className="form-label" htmlFor="registerRecommendationcode">Recommendation Code</label>
                <input onChange={setVal} value ={inpval.registerRecommendationcode}id="registerRecommendationcode" className="form-control" name='registerRecommendationcode'/>
               
              </div>
           

              {/* <!-- Password input --> */}
              {/* //onChange={setVal} value ={inpval.registerPassword} */}
              <div className="form-outline mb-2">
              <label className="form-label" htmlFor="registerPassword">Password</label>
                <input onChange={setVal} value ={inpval.registerPassword}id="registerPassword" className="form-control" name='registerPassword' />
               
              </div>

              {/* <!-- Repeat Password input --> */} 
              {/* //onChange={setVal} value ={inpval.registerRepeatPassword}  */}
              <div className="form-outline mb-2">
              <label className="form-label" htmlFor="registerRepeatPassword">Confirm password</label>
                <input onChange={setVal} value ={inpval.registerRepeatPassword} id="registerRepeatPassword" className="form-control" name='registerRepeatPassword' />
               
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-2">
                <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                  aria-describedby="registerCheckHelpText" />
                <label className="form-check-label" htmlFor="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <center> <button className="btn btn-purple  btn-block mb-5 mt-2 mx-5" onClick={addUserdata}>Sign Up</button></center>
              {/* <center> <Link to={'/login'}><button type="submit" className="btn btn-purple  btn-block mb-5 mt-2 mx-5">Sign Up</button></Link></center> */}
            </form>
          </div>
        </div>
      </div>
      <br />
     
      <div>
        <Footer />
      </div>
    </>

  )
}


export default Register;
