import React, { Component } from 'react';
import {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Popup_addJob = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มบริษัท</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" placeholder="Job Position" autoFocus/>
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" placeholder="Education" autoFocus />
            <Form.Label>Toeic</Form.Label>
            <Form.Control type="text" placeholder="Toeic" autoFocus/>
            <Form.Label>GPAX</Form.Label>
            <Form.Control type="text" placeholder="GPAX" autoFocus/>
            <Form.Label>Available count</Form.Label>
            <Form.Control type="text" placeholder="Available count" autoFocus/>
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" placeholder="Salary" autoFocus/>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Job Requirement</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  };