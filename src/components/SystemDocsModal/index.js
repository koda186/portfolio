import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Modal from 'react-bootstrap/Modal';
import "./index.css";
import Pdf from './Pdf';

function ModalBody() {
  const values = 'xxl-down';
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>

        <Button onClick={() => handleShow(values)}>
          System & Component Design
        </Button>
      <div className="my-modal">
      <Modal
      size="xl"
      show={show}
      fullscreen={fullscreen}
      onHide={() => setShow(false) }

      >
        <Modal.Header closeButton>
          {/*<Modal.Title>Modal</Modal.Title>*/}
        </Modal.Header>

        <Modal.Body><Pdf /></Modal.Body>
        
      </Modal>
    </div>
    </>
  );
}

export default ModalBody;
