import React,  { useState }from 'react'
import {Link,useNavigate} from "react-router-dom"
import Footer from '../Home/Footer'
import '../../Comp-style/login.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    

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
            [name]: value
        }
    })
};

const loginuser = async(e) => {
    e.preventDefault();

    const { registerMobilenumber, registerPassword } = inpval;

    if (registerMobilenumber === "") {
        toast.error("email is required!", {
            position: "top-center"
        });
    } else if (registerPassword === "") {
        toast.error("password is required!", {
            position: "top-center"
        });
    } else if (registerPassword.length < 6) {
        toast.error("password must be 6 char!", {
            position: "top-center"
        });
    } else {
         console.log("user login succesfully done");


        const data = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                registerMobilenumber, registerPassword
            })
        });

        const res = await data.json();
        console.log(res);

        if(res.status === 201){
            localStorage.setItem("usersdatatoken",res.result.token);
            history("/My2")
            setInpval({...inpval,registerMobilenumber:"",registerPassword:""});
        }
    }
}
    return (
        <>
            <div className="container py-4">
                {/* <!-- Pills navs --> */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <p className=" nav-link   bg-purple" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</p>
                </li>
                
            </ul>
            {/* <!-- Pills navs --> */}

            {/* <!-- Pills content --> */}
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <input id="registerMobilenumber" htmlFor="registerMobilenumber" onChange={setVal} value={inpval.registerMobilenumber} name="registerMobilenumber" />
                            <label className="form-label" htmlFor="registerMobilenumber">Phone number</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" htmlFor= "registerPassword" onChange={setVal} value={inpval.registerPassword} name="registerPassword" />
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>

                        {/* <!-- 2 column grid layout --> */}
                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                {/* <!-- Simple link --> */}
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                        <button className="btn btn-purple" onClick={loginuser}>Login</button>
                        {/* <!-- Submit button -->  <Link to={'/login-dashboard'}>*/}
                        {/* <center> <button className="btn btn-purple  btn-block mb-5 mt-2 mx-5" onClick={loginuser}>Sign Up</button></center>
                       <center><button type="submit" onClick={loginuser} className="btn btn-purple  btn-block mb-3 mx-5">Sign in</button></center> */}

                        {/* <!-- Register buttons --> */}
                        <div className="text-center">
                            <p>Not a member?&nbsp;<Link to={'/register'}>Register</Link></p>
                        </div>
                    </form>
                </div>
               
                
            </div>
            {/* <!-- Pills content --> */}
            
       
            </div>
            <div>
            <Footer/>
            </div>

        </>
    )
}

export default Login;
