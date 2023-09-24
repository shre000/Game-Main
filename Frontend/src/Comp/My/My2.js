import React from 'react'
import Logdash from './Logdash'
import {useNavigate} from 'react-router-dom';


const My2 = () => {
  let token = localStorage.getItem("usersdatatoken");
  console.log(token);
 // const history = useNavigate();

  if(!token){
    alert("Please Login Again");
    return;
}
  return (
    <div>
      <Logdash/>
    </div>
  )
}

export default My2
