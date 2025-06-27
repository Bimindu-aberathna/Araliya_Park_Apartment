import React, { Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ImageCarousel = React.lazy(() => import('./ImageCarousel'));

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Suspense fallback={<div>Loading...</div>}>
          <ImageCarousel />
        </Suspense>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal; 
