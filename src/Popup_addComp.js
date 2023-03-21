import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import axios from 'axios';
import { localenv } from './env.js';


const PopupAddComp = ({show,handleClose}) => {
  //console.log(show)

  const [state,setState] = useState({
    company_name:"",
    location:"",
    email:"",
    marketcap:"",
    website:"",
    telephone:""
  })
  const {company_name,location,email,marketcap,website,telephone} = state

  //กำหนดค่าstate
  const inputValue=name=>event=>{
      //console.log(name,"=",event.target.value)
      setState({...state,[name]:event.target.value})
    }     
  //-------------------------------------------------------------------------
  const send_addcompany = () => {
    console.log({company_name,location,email,marketcap,website,telephone})
    axios
    .post((localenv.apiHostname+"/api/new/company"),{company_name,location,email,marketcap,website,telephone})
    .then(console.log("complete"))
    .catch(err => {
      console.log(err.response.data.error +" "+ err.response.data.message)
      })
  }

    return (
        <Modal show={show === 'addComp'} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มบริษัท</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" onChange={inputValue("company_name")} placeholder="Company's name" autoFocus/>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={inputValue("email")} placeholder="name@example.com" autoFocus />
            <Form.Label>Marketcap</Form.Label>
            <Form.Control type="text" onChange={inputValue("marketcap")} placeholder="Marketcap" autoFocus/>
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" onChange={inputValue("telephone")} placeholder="Telephone" autoFocus/>
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" onChange={inputValue("website")} placeholder="www.youecompant.com" autoFocus/>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" onChange={inputValue("location")} placeholder="Location" autoFocus/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={send_addcompany}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  };
export default PopupAddComp