import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Counter from './Counter';

const Joinblue = ({ disabled }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!disabled) {
      setShow(true);
    }
  };

  return (
    <div>
      <Button variant="primary" className='btn' onClick={handleShow} disabled={disabled}>
        Join blue
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-primary text-light' closeButton>
          <Modal.Title className='fs-5 text-center'>Join blue</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Counter />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Joinblue;
