import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Counter from './Counter';

const Joinblue = ({ disabled,availableBalance,setAvailableBalance,handleColorPrediction }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deductFromBalance = (selectedAmount) => {
        // Calculate the new available balance by deducting the selected amount
        const newBalance = availableBalance - selectedAmount;
        console.log("new balance "+newBalance);
        setAvailableBalance(newBalance); // Update the balance in App.js
       
        handleClose(); // Close the modal
        //handleNumberPrediction("0");
        //setAvailableBalance(newBalance);
    };
    const buttonclick =() => {
        handleShow();
        handleColorPrediction("BLUE");
        console.log("clicked BLUE")
      }
  return (
    <div>
      <Button variant="primary" className='btn' onClick={buttonclick} disabled={disabled}>
        Join blue
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-primary text-light' >
          <Modal.Title className='fs-5 text-center'>Join blue</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Counter onAmountSelected={deductFromBalance} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Joinblue;
