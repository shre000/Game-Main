import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';
import '../../../Comp-style/winsection3.css'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
import Joingreen from './Joingreen';
import Joinblue from './Joinblue';
import Joinred from './Joinred';
import Zero from './Zero';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';

import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine'


const WinSection3 = () => {
    return (
        <div>
            <div className='container-fluid bg-warning text-light' >

                {/* <Row className='text-center py-2 fs-6 '>
                    <Col><Link to={'/parity'}>Parity</Link></Col>
                    <Col><Link to={'/spree'}>Sapre</Link></Col>
                    <Col><Link to={'/bcone'}>Bcone</Link></Col>
                    <Col><Link to={'/emerd'}>Emerd</Link></Col>

                </Row> */}


            </div>
            <div className='py-2'>
                <div className="row">
                    <div className="col mx-3 fs-5">
                        Period <br /> 39293829
                    </div>
                    <div className="col text-end mx-3 fs-5">
                        Countdown <br /> 2:09
                    </div>
                </div>
                <div className="container py-2">
                    <Row className='text-center'>
                        <Col><Joingreen/></Col>
                        <Col><Joinblue/></Col>
                        <Col><Joinred/></Col>
                    </Row>
                </div>
                <hr />
                <Row className='text-lg-center text-md-start text-sm-start text-xs-start'>
                    <Col><span><Zero/></span></Col>
                    <Col><span><One/></span></Col>
                    <Col><span><Two/></span></Col>
                    <Col><span><Three/></span></Col>
                    <Col><span><Four/></span></Col>
                    <Col><span><Five/></span></Col>
                    <Col><span><Six/></span></Col>
                    <Col><span><Seven/></span></Col>
                    <Col><span><Eight/></span></Col>
                    <Col><span><Nine/></span></Col>
                </Row>

                <hr />

            </div>
        </div>
    )
}

export default WinSection3
