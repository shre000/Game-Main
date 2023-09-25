import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'



const Joingreen = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button variant="success" className='btn' onClick={handleShow} >
                Join Green
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-success text-light' closeButton>
                    <Modal.Title className='fs-5 text-center'>Join green</Modal.Title>
                </Modal.Header>
                <Modal.Body> Read the instructions mentioned below carefully 


                </Modal.Body>
                <Modal.Footer >
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Confirm
                    </Button>
                   


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Joingreen
