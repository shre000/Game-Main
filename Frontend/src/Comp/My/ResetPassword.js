import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'


const ResetPassword = () => {
    const [newpassword, setPassword] = useState()
    const navigate = useNavigate()
    const {id, token} = useParams()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/reset-password/${id}/${token}`, {newpassword})
        .then(res => {
            if(res.data.Status === "Success") {
              console.log(res);
              alert("Successfully Changed")
                //navigate('/login')
               
            }
        }).catch(err => console.log(err))
    }

    return (
      <div className="container py-4">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
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
                  type="text"
                  id="newpassword"
                  className="form-control"
                  value={newpassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="newpassword">
                  New password
                </label>
              </div>
              <center>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-purple  btn-block mb-5 mt-2 mx-5"
                >
                  Update Password
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ResetPassword;