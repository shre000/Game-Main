import React, { useState } from 'react';
import app from './Firebase_config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();

const Password = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [registerMobilenumber, setPhone] = useState("91");



  function resetPassword(e) {
    e.preventDefault();
    // Removed the unused user variable

    const auth = getAuth();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        setMessage('Password reset email sent. Check your inbox.');
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const handleResetRequest = async (e) => {
    e.preventDefault();
    //const { email } = inpval;

    try {
      const response = await fetch('/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,registerMobilenumber }),
      });
      console.log(response);
      const res = await response.json();
      console.log(res);
      if (response.status === 200) {
        setMessage('Password reset instructions sent. Check your email.');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="">
      <ul className="nav nav-justified mb-3 fs-4" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <p
            className="nav-link  bg-purple"
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Reset Password
          </p>
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
            <div className="form-outline mb-2">
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="form-outline mb-2">
              <input
                type="text"
                id="registerMobilenumber"
                className="form-control"
                value={registerMobilenumber}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="form-label" htmlFor="registerMobilenumber">Registred Mobile Number</label>
            </div>
            <p>{message}</p>
            <center>
              <button
                type="submit"
                onClick={handleResetRequest}
                className="btn btn-orange  btn-block mb-5 mt-2 mx-5"
              >
                Reset Password
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
