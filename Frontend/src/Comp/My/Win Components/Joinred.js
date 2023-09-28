import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Counter from './Counter';



const Joinred = ({ disabled }) =>  {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    return (
        <div>
            <Button variant="danger" className='btn' onClick={handleShow} disabled={disabled}>
        Join Red
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header  className='bg-danger text-light'closeButton>
                    <Modal.Title className='fs-5 text-center '>Join Red</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Counter/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Confirm
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Joinred
