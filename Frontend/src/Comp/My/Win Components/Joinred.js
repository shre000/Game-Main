import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Counter from './Counter';



const Joinred = ({ disabled,availableBalance,setAvailableBalance,handleColorPrediction}) =>  {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deductFromBalance = (selectedAmount) => {
        // Calculate the new available balance by deducting the selected amount
        const newBalance = availableBalance - selectedAmount;
        console.log("New balance "+newBalance);
        setAvailableBalance(newBalance); // Update the balance in App.js
       
        handleClose(); // Close the modal
        //handleNumberPrediction("0");
        //setAvailableBalance(newBalance);
    };
    const buttonclick =() => {
        handleShow();
        handleColorPrediction("RED");
        console.log("clicked Red")
      }
   
    return (
        <div>
            <Button variant="danger" className='btn' onClick={buttonclick} disabled={disabled}>
        Join Red
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header  className='bg-danger text-light'>
                    <Modal.Title className='fs-5'>Join Red</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Counter onAmountSelected={deductFromBalance} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Joinred
