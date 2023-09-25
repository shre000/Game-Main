import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'



const Zero = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {/* <Button variant="success" className='btn' onClick={handleShow} >
                Select Zero
            </Button> */}
            <Button data-v-3acbc54d="" onClick={handleShow} className="btn split0" data-num="0">0</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title className='fs-5 text-center'>Select 0</Modal.Title>
                </Modal.Header>
                <Modal.Body> 


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

export default Zero