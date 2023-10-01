import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Counter from './Counter';



const Seven= ({ disabled ,availableBalance,setAvailableBalance,handleNumberPrediction}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deductFromBalance = (selectedAmount) => {
        // Calculate the new available balance by deducting the selected amount
        const newBalance = availableBalance - selectedAmount;
        console.log("Number predication new balance "+newBalance);
        setAvailableBalance(newBalance); // Update the balance in App.js
       
        handleClose(); // Close the modal
        //setAvailableBalance(newBalance);
    };
    const buttonclick =() => {
        handleShow();
        handleNumberPrediction("7");
        console.log("clicked")
      }
    return (
        <div>
            {/* <Button variant="success" className='btn' onClick={handleShow} >
                Select Zero
            </Button> */}
            <Button data-v-3acbc54d="" disabled={disabled} onClick={buttonclick} className="btn btn-success" data-num="0">7</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='global-bg text-light' >
                    <Modal.Title className='fs-5 text-center'>Select 7</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                <Counter onAmountSelected={deductFromBalance} />

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

export default Seven
