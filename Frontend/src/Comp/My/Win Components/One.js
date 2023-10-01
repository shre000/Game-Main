import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Counter from './Counter';

const One = ({ disabled ,availableBalance,setAvailableBalance,handleNumberPrediction}) => {
  const [show, setShow] = useState(false);
  //const [availableBalance, setAvailableBalance] = useState(643.4);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deductFromBalance = (selectedAmount) => {
        // Calculate the new available balance by deducting the selected amount
        const newBalance = availableBalance - selectedAmount;
        console.log("Number predication new balance "+newBalance);
        setAvailableBalance(newBalance); // Update the balance in App.js
       
        handleClose(); // Close the modal
    };
    const buttonclick =() => {
      handleShow();
      handleNumberPrediction("1");
      console.log("clicked")
    }
  return (
    <div>
      <Button variant="success" className='btn' onClick={buttonclick} disabled={disabled}>
        1
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className=' text-light global-bg'>
          <Modal.Title className='fs-5 text-center'>Select 1</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Counter onAmountSelected={deductFromBalance} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="orange" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default One;
