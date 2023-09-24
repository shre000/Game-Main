import React, { useState } from 'react';
import app from "./Firebase_config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//import "firebase/auth";

const auth = getAuth();


const Password = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function resetPassword(email) {
    //e.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Password reset email sent. Check your inbox.');

        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setMessage('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
    }
  };
  return (
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
            {/* Mobile number */}
            <div className="form-outline mb-2">
              <input
                type="email"
                id="email"
                className="form-control"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                // Use the email state variable
                 // Update the email state onChange={(e) => setregisterMobilenumber(e.target.value)
              />
              <label className="form-label" htmlFor="email">Email</label>
            </div>
            <p>{message}</p>
            {/* Submit button */}
            <center>
              <button type="submit" onClick={resetPassword} className="btn btn-purple  btn-block mb-5 mt-2 mx-5">Reset Password</button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
