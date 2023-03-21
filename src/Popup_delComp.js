import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from "react";
import axios from 'axios';
import { localenv } from './env.js';



const PopupDelComp = ({show,handleClose}) => {

    return (
        <Modal show={show === 'delComp'} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ลบบริษัท</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Select aria-label="Default select example">
            <option hidden value>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default PopupDelComp