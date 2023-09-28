import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const Readrules = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <div>
            <Button className='btn btn-orange' onClick={handleShow} >
             Rules
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-5 text-center'>Rule of Guess</Modal.Title>
                </Modal.Header>
                <Modal.Body> Demo text..........guess a number then ....</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    </div>
  )
}

export default Readrules
