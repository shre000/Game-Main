import React from 'react'
import Topbar from './Topbar';
import Corousel from './Corousel';
import Cards from './Cards';
import Footer from './Footer';
// import Register2 from '../My/Register2';

const Home = () => {
  return (
    <div>
      {/* <Register2/> */}
      <Topbar/>
      <Corousel/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home;
