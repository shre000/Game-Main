import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Counter from './Counter';



const Five = ({ disabled }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {/* <Button variant="success" className='btn' onClick={handleShow} >
                Select Zero
            </Button> */}
            <Button data-v-3acbc54d="" disabled={disabled} onClick={handleShow} className="btn split1" data-num="0">5</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='global-bg text-light'>
                    <Modal.Title className='fs-5 text-center'>Select 5</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Counter/>

                </Modal.Body>
                <Modal.Footer >
                    <Button variant="orange" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="orange" onClick={handleClose}>
                        Confirm
                    </Button>
                   


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Five
