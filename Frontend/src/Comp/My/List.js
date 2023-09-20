import React from 'react'
import '../../Comp-style/list.css'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <div>
            <div className="container py-1 mb-4">
                <ul className="">

                    <Link to={'/bonus'}> <li className="list-group-item mt-1"><i class="fa-solid fa-gift fa-spin"></i>&nbsp;Bonus Record</li></Link>
                    <Link to={'/promotion'}> <li className="list-group-item mt-1"><i class="fa-solid fa-percent fa-spin"></i>&nbsp;Promotion</li></Link>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fa-solid fa-wallet fa-spin"></i>&nbsp;Wallet</Accordion.Header>
                            <Accordion.Body>
                                <Link to={'/recharge'}><i class="fa-solid fa-bolt fa-spin"></i>&nbsp;Recharge</Link>
                            </Accordion.Body>
                            <Accordion.Body>
                                <Link to={'/withdrawl'}><i class="fa-solid fa-money-bill-transfer fa-spin"></i>&nbsp;Withdrawl</Link>
                            </Accordion.Body>

                        </Accordion.Item>
                    </Accordion>
                  <Link to={'/transactions'}> <li className="list-group-item"><i class="fa-solid fa-comment-dollar fa-spin"></i>&nbsp;Transactions</li></Link>

                    <Link to={'/bankcard'}> <li className="list-group-item mt-1"><i class="fa-solid fa-credit-card fa-spin"></i>&nbsp;Bank Card</li></Link>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="">
                            <Accordion.Header><i class="fa-solid fa-shield-halved fa-spin"></i>&nbsp;Account Security</Accordion.Header>
                            <Accordion.Body>
                            <Link to={'/resetpassword'}><i class="fa-solid fa-key fa-spin"></i>&nbsp;Reset Password</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                    {/* <li className="list-group-item">Complaints and Suggestions</li> */}
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fa-solid fa-eject fa-spin"></i>&nbsp;About</Accordion.Header>
                            <Accordion.Body>
                            <Link to={'/privacypolicy'}><i class="fa-solid fa-lock fa-spin"></i>&nbsp;Privacy Policy</Link>
                            </Accordion.Body>
                            <Accordion.Body>
                            <Link to={'/agreement'}><i class="fa-solid fa-triangle-exclamation fa-spin"></i>&nbsp;Risk Disclosure agreement</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </ul>
                <center> <Link to={'/login'} ><button type='button' className='btn btn-purple'>Sign Out</button></Link>  </center>
            </div>


        </div>
    )
}

export default List
