import React, { useState, Component } from "react";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "./Firebase_config";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth(app);
const Register = () => {
 
  const [registerMobilenumber, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');
  const [inpval, setInpval] = useState({
    registerMobilenumber: "",
    registerVerificationcode: "",
    registerRecommendationcode: "",
    registerPassword: "",
    registerRepeatPassword: "",
    verifyOtp: false,
    VerifyButton:false,
    otp: "",
  });
  //this.onSignSubmit = this.onSignSubmit.bind(this);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          this.onSignSubmit();
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, registerMobilenumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("OTP Sent");
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  };
  const onCapthVerify = () => {
    const auth = getAuth();
    const phoneNumber = "+91" + inpval.registerMobilenumber;
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            alert("OTP sent");
            setInpval({ ...inpval, verifyOtp: true });
          })
          .catch((error) => {
            // Error; SMS not sent
            alert("Error sending OTP: " + error.message);
          });
      },
      'expired-callback': () => {
        // Response expired. Ask the user to solve reCAPTCHA again.
        // ...
      }
    });
  };
  
  const onSignSubmit = () => {
    onCapthVerify();
  };
  
    
  const verifyOtp = (event) => {
     event.preventDefault(); 
    const otp = inpval.registerVerificationcode;
    if (window.confirmationResult) {
      window.confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          alert("Verification Done");
          // ...
        })
        .catch((error) => {
          alert("Invalid OTP");
          // User couldn't sign in (bad verification code?)
          // ...
        });
    } else {
      alert("Confirmation result is not available. Please send OTP first.");
    }
  };
  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const history = useNavigate();
const Buttonclick=async(e)=>{
  
  e.preventDefault();
  const { registerMobilenumber, registerVerificationcode, registerRecommendationcode, registerPassword, registerRepeatPassword } = inpval;

  if (registerMobilenumber === "") {
    alert("Mobile number is required");
    toast.warning("fname is required!", {
      position: "top-center"
    });
  } else if (registerVerificationcode === "") {
    alert("Verificationcode is required!")

    toast.error("Verificationcode is required!", {
      position: "top-center"
    });
  } else if (registerRecommendationcode === "") {
    alert("recomdationcode is required!")

    toast.warning("recomdationcode is required!", {
      position: "top-center"
    });
  } else if (registerPassword === "") {
    alert("registerPassword is required!")

    toast.error("password is required!", {
      position: "top-center"
    });
  } else if (typeof registerPassword === 'string' && registerPassword.length < 5) {
    alert("password must be 5 char!")

    toast.error("password must be 6 char!", {
      position: "top-center"
    });
  } else if (registerRepeatPassword === "") {
    toast.error("cpassword is required!", {
      position: "top-center"
    });
  }
  else if (typeof registerRepeatPassword === 'string' && registerRepeatPassword.length < 5) {
    toast.error("confirm password must be 5 char!", {
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
      setInpval({ ...inpval, registerMobilenumber: "", registerVerificationcode: "", registerRecommendationcode: "", registerPassword: "", registerRepeatPassword: "" });
    }else{
      alert(res.error);
    }
  }

  console.log("button clicked");
}


  return (
    <>
      <div className="container py-4">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <p
              className="nav-link bg-warning  bg-purple"
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Register
            </p>
            <div id="recaptcha-container"></div>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form>
              <div className="text-center mb-3" />

              {/* <!-- Mobile number --> */}
              {/* onChange={setVal} value ={inpval.registerMobilenumber}  */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="registerMobilenumber">
                  Mobile Number
                </label>
                <div className="input-group">
                  <input
                     onChange={(event) => {
                      setPhone(event.target.value);
                      setVal(event); // Call both functions in the event handler
                    }}
                    value={inpval.registerMobilenumber}
                    className="form-control"
                    name="registerMobilenumber"
                    id="registerMobilenumber"
                    placeholder="Enter Your Mobile number"
                  />
                  <button className="btn btn-primary" onClick={handleSend}>
                    Send OTP
                  </button>
                </div>
              </div>


              {/* <!-- Verification Code --> */}
              {/*  onChange={setVal} value ={inpval.registerVerificationcode}*/}

              <div className="form-outline mb-2">
                <label
                  className="form-label"
                  htmlFor="registerVerificationcode"
                >
                  Verification code
                </label>
                <div className="input-group">
                  <input
                  type="number"
                   onChange={setVal}
                    value={inpval.registerVerificationcode}
                    className="form-control"
                    name="registerVerificationcode"
                    id="registerVerificationcode"
                    placeholder="Enter Your Mobile number"
                  />
                  <button className="btn btn-primary" onClick={verifyOtp}>
                    Verify OTP
                  </button>
                </div>
              </div>

              {/* //onClick={HandleVerify} */}

              {/* <!-- Password input --> */}
              {/* //onChange={setVal} value ={inpval.registerPassword} */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  onChange={setVal}
                  value={inpval.registerPassword}
                  id="registerPassword"
                  className="form-control"
                  name="registerPassword"
                  placeholder="Create your password"
                />
              </div>

              {/* <!-- Repeat Password input --> */}
              {/* //onChange={setVal} value ={inpval.registerRepeatPassword}  */}
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Confirm password
                </label>
                <input
                  onChange={setVal}
                  value={inpval.registerRepeatPassword}
                  id="registerRepeatPassword"
                  className="form-control"
                  name="registerRepeatPassword"
                  placeholder="Confirm your password"
                />
              </div>

              {/* <!-- Recommendation code --> */}
              {/* onChange={setVal} value ={inpval.registerRecommendationcode}  */}
              <div className="form-outline mb-2">
                <label
                  className="form-label"
                  htmlFor="registerRecommendationcode"
                >
                  Recommendation Code
                </label>
                <input
                  onChange={setVal}
                  value={inpval.registerRecommendationcode}
                  id="registerRecommendationcode"
                  className="form-control"
                  name="registerRecommendationcode"
                  placeholder="Enter your recommendation code"
                />
              </div>
              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-2">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  checked
                  aria-describedby="registerCheckHelpText"
                />
                <label className="form-check-label" htmlFor="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <center> <button className="btn btn-purple  btn-block mb-5 mt-2 mx-5" onClick={Buttonclick}>Sign Up</button></center>
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
  );
};

export default Register;
