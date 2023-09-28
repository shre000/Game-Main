import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Counter from './Counter';

const Joingreen = ({ disabled }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!disabled) {
      setShow(true);
    }
  };

  return (
    <div>
      <Button variant="success" className='btn' onClick={handleShow} disabled={disabled}>
        Join Green
      </Button>

      <Modal show={show} onHide={handleClose} centered> {/* Add the 'centered' prop to the Modal */}
        <Modal.Header className='bg-success text-light' closeButton>
          <Modal.Title className='fs-5 text-center'>Join green</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Counter />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Joingreen;
