import React from 'react'
import { Link } from 'react-router-dom'

const Transactions = () => {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date1 = `${current.getDate()-1}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date2 = `${current.getDate()-2}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date3= `${current.getDate()-6}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date4 = `${current.getDate()-7}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (

        <div>
            <div className='promotion-outer p-2'>
                <Link className='promotion-outer' to={'/login-dashboard'}><span> <i className="fa-solid fa-arrow-left fa-beat"></i> &nbsp;Transactions</span></Link>
            </div>

            <div className="row my-2">
                <div className="col-6 px-5">
                    <div className='my-2'><i class="fa-solid fa-money-bill-transfer fa-flip"></i> Withdrawl  <br /> {date}</div> <hr />
                    <div className='my-2'><i class="fa-brands fa-gratipay fa-flip"></i>Not enough  bets<br /> {date1}</div> <hr />
                    <div className='my-2'><i class="fa-brands fa-gratipay fa-flip"></i> Not enough bets<br />{date2}</div> <hr />
                    <div className='my-2'><i class="fa-solid fa-money-bill-transfer fa-flip"></i> Widthdrawl<br />{date3}</div> <hr />
                    <div className='my-2'><i class="fa-brands fa-gratipay fa-flip"></i> Joined<br />{date4}</div> <hr />
                </div>
                <div className="col-6 text-end px-5 ">
                    <div className='my-2 text-danger'>-300 <br /> {date}</div> <hr />
                    <div className='my-2 text-success'>600 <br />{date1}</div> <hr />
                    <div className='my-2 text-success'>300<br />{date2}</div> <hr />
                    <div className='my-2  text-danger'>-600<br />{date3}</div> <hr />
                    <div className='my-2  text-danger'>-10<br />{date4}</div> <hr />
                </div>
            </div>
        </div>
    )
}

export default Transactions
