import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import "../../Comp-style/login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [registerMobilenumber, setPhone] = useState("91");

  const [inpval, setInpval] = useState({
    registerMobilenumber: "",
    registerPassword: "",
  });

  const history = useNavigate();

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();

    const { registerMobilenumber, registerPassword } = inpval;

    if (registerMobilenumber === "") {
      alert(" Mobilenumber is required! ");
      toast.error("Mobilenumber is required!", {
        position: "top-center",
      });
    } else if (!registerMobilenumber.includes("91")) {
      alert(" Mobile number must include '91' ");
      toast.error("Mobile number must include '91'", {
        position: "top-center",
      });
    } else if (registerPassword === "") {
      alert("password is required!");

      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (registerPassword.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      console.log("user login succesfully done");

      const data = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registerMobilenumber,
          registerPassword,
        }),
      });

      const res = await data.json();
      console.log(res);

      if (res.error === "Password Didn't Match") {
        alert("Invalid Credentials");
      } else if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/My2");
        setInpval({
          registerMobilenumber: "",
          registerPassword: "",
        });
      }
    }
  };
  return (
    <>
      <div className="container py-4">
        {/* <!-- Pills navs --> */}
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <p
              className=" nav-link   bg-purple"
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </p>
          </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  id="registerMobilenumber"
                  htmlFor="registerMobilenumber"
                  onChange={(e) => {
                    setPhone(e.target.value); // Set the phone number
                    setVal(e); // Update the inpval object
                }}
                  value={registerMobilenumber}
                  name="registerMobilenumber"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerMobilenumber">
                  Phone number
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  htmlFor="registerPassword"
                  onChange={setVal}
                  value={inpval.registerPassword}
                  name="registerPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              {/* <!-- 2 column grid layout --> */}
              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  {/* <!-- Simple link --> */}
                  {/* <a href="/resetpassword">Forgot password?</a> */}
                  <Link to={"/resetpassword"}>Forgot password?</Link>
                </div>
              </div>
              <div className="text-center mb-2">
                <button className="btn btn-purple" onClick={loginuser}>
                  Login
                </button>
              </div>
              {/* <!-- Submit button -->  <Link to={'/login-dashboard'}>*/}
              {/* <center> <button className="btn btn-purple  btn-block mb-5 mt-2 mx-5" onClick={loginuser}>Sign Up</button></center>
                       <center><button type="submit" onClick={loginuser} className="btn btn-purple  btn-block mb-3 mx-5">Sign in</button></center> */}

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member?&nbsp;<Link to={"/register"}>Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- Pills content --> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
