
import { Routes , Route,Navigate } from 'react-router-dom';
import React, { useState} from "react";
import './App.css';
// import Section1 from './Comp/Section1';
import Home from './Comp/Home/Home';
import Search from './Comp/Search/Search';
import Login from './Comp/My/Login';
import Register from './Comp/My/Register';
import Logdash from './Comp/My/Logdash';
import Home2 from './Comp/Home/Home2';
import Search2 from './Comp/Search/Search2';
import My2 from './Comp/My/My2';
import Win from './Comp/My/Win';
import Password from './Comp/My/Password'; 
import Bonus from './Comp/My/Bonus';
import Promotion from './Comp/My/Promotion';
import Recharge from './Comp/My/Recharge';
import Withdrawl from './Comp/My/Withdrawl';
import Bankcard from './Comp/My/Bankcard';
import Addbank from './Comp/My/Addbank';
import Selectbank from './Comp/My/Selectbank';
import Upi from './Comp/My/Upi';
import Transactions from './Comp/My/Transactions';
import Agreement from './Comp/My/Agreement';
import Privacypolicy from './Comp/My/Privacypolicy';
import Record_recharge from './Comp/My/Record_recharge';
import Record_withdrawl from './Comp/My/Record_withdrawl';
import ResetPassword from './Comp/My/ResetPassword';
import Wupi from './Comp/My/Wupi';

import Wbank from './Comp/My/Wbank';
// import P from './Comp/My/Win Components/P';
// import S from './Comp/My/Win Components/S';
// import B from './Comp/My/Win Components/B';
// import E from './Comp/My/Win Components/E';






function App () {
  const [availableBalance, setAvailableBalance] = useState(650);
  let token = localStorage.getItem("usersdatatoken");
    //console.log(token);
  return (
    
    <>
    <Routes>
      <Route path= '/' element ={<Home/>}></Route>
      <Route path= '/home2' element ={<Home2/>}></Route>
      <Route path= '/search' element ={<Search/>}></Route>
      <Route path= '/search2' element ={<Search2/>}></Route>
      <Route path= '/my2' element ={<My2/>}></Route>

      {/* <Route path="/my2" element={token ? <My2 /> : <Navigate to="/login" />} /> */}
      <Route path= '/login' element ={<Login/>}></Route>
      <Route path= '/resetpassword' element ={<Password/>}></Route>


      <Route path= '/register' element ={<Register />}></Route>
      <Route path= '/login-dashboard' element ={<Logdash/>}></Route>
      <Route path= '/win' element ={<Win  availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}/>}></Route>
      {/* <Route path= '/parity' element ={<P/>}></Route>
      <Route path='/spree' element={<S/>}></Route>
      <Route path='/bcone' element={<B/>}></Route>
      <Route path='/emerd' element={<E/>}></Route> */}
      <Route path='/bonus' element ={<Bonus/>} ></Route>
      <Route path='/promotion' element={<Promotion/>}></Route>
      <Route path='/recharge' element={<Recharge/>}></Route>
      <Route path='/withdrawl' element={<Withdrawl/>}></Route>
      <Route path='/bankcard' element={<Bankcard/>}></Route>
      <Route path='/addbank' element={<Addbank/>}></Route>
      <Route path='/selectbank' element={<Selectbank/>}></Route>
      <Route path='/selectupi' element={<Upi/>}></Route>
      <Route path='/transactions' element={<Transactions/>}></Route>
      <Route path='/privacypolicy' element={<Privacypolicy/>}></Route>
      <Route path='/agreement' element={<Agreement/>}></Route>

      <Route path='/recharge_record' element={<Record_recharge/>}></Route>
      <Route path='/withdrawl_record' element={<Record_withdrawl/>}></Route>
      
      <Route path='/wbank' element={<Wbank/>}></Route>
      <Route path='/wupi' element={<Wupi/>}></Route>
      <Route path='/reset_password/:id/:token' element={<ResetPassword/>}></Route>







      
    </Routes>

    </>
   
    
  );
}


export default App;
