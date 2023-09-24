import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';
import '../../../Comp-style/winsection3.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


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
                        <Col><button className='btn btn-success'>Join Green</button></Col>
                        <Col><button className='btn btn-primary'>Join Blue</button></Col>
                        <Col><button className='btn btn-danger'>Join Red</button></Col>
                    </Row>
                </div>
                <hr />
                <Row className='text-lg-center text-md-start text-sm-start text-xs-start'>
                    <Col><span> <button data-v-3acbc54d="" className="btn split0" data-num="0">0</button></span></Col>
                    <Col><span className='btn btn-success'>1</span></Col>
                    <Col><span className='btn btn-danger '>2</span></Col>
                    <Col><span className='btn btn-success '>3</span></Col>
                    <Col><span className='btn btn-danger '>4</span></Col>
                    <Col><span> <button data-v-3acbc54d="" className="btn split1" data-num="0">5</button></span></Col>
                    <Col><span className='btn btn-danger '>6</span></Col>
                    <Col><span className='btn btn-success '>7</span></Col>
                    <Col><span className='btn btn-danger '>8</span></Col>
                    <Col><span className='btn btn-success '>9</span></Col>
                </Row>

                <hr />

            </div>
        </div>
    )
}

export default WinSection3
