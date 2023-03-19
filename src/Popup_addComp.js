import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const PopupAddComp = ({show,handleClose}) => {
  //console.log(show)

    return (
        <Modal show={show === 'addComp'} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มบริษัท</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company's name" autoFocus/>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
            <Form.Label>Marketcap</Form.Label>
            <Form.Control type="text" placeholder="Marketcap" autoFocus/>
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" placeholder="Telephone" autoFocus/>
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="www.youecompant.com" autoFocus/>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Location" autoFocus/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  };
export default PopupAddComp