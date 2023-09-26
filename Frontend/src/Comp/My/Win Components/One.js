import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Counter from './Counter';



const One = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {/* <Button variant="success" className='btn' onClick={handleShow} >
                Select Zero
            </Button> */}
            <Button data-v-3acbc54d="" onClick={handleShow} className="btn btn-success" data-num="0">1</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title className='fs-5 text-center'>Select 1</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Counter/>

                </Modal.Body>
                <Modal.Footer >
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleClose}>
                        Confirm
                    </Button>
                   


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default One
