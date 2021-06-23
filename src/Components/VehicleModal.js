import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import VehicleDetail from './VehicleDetail'

const VehicleModal = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Vehicle Details
          </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vehicle Details</Modal.Title>
                </Modal.Header>
                <Modal.Body><VehicleDetail {...props} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add to Cart
              </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VehicleModal



