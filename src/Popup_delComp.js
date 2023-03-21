import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from "react";
import axios from 'axios';
import { localenv } from './env.js';



const PopupDelComp = ({show,handleClose}) => {

  const[company_fetch,setfetch] = useState([]) // ข้อมูลบริษัท(id,name) เก็บอยู่ใน company_fetch เป็น array

    const fetchData_company =()=>{
      axios
      .get(localenv.apiHostname+"/api/get/companies")
      .then(resp=>{
        setfetch(resp.data) 
        //console.log("from fetchData_company : ",resp.data)
      })
      .catch(err=>alert(err));
    }
    useEffect(()=>{
      fetchData_company();
    },[])

  const [state,setState] = useState({
      company_id:""
  })
  const {company_id} = state

  const send_DeleteCompany = () => {
    var dummy_CompanyID = parseInt(company_id)
    console.log({id:dummy_CompanyID})
    axios
    .delete(`${localenv.apiHostname}/api/delete/company/${dummy_CompanyID}"`)
    .then(console.log("complete"))
    .catch(err => {
      console.log(err.response.data.error +" "+ err.response.data.message)
      })
  }

   
  const list_company = () => {
    let arr = [];

    for(const data of company_fetch){
      arr.push(<option value={data.id}>{data.company_name}</option>)
    }
    return arr ;
  }

  const handleChange = event => {
    console.log(event.target.value);
    setState({...state,company_id:event.target.value});
  };

    return (
        <Modal show={show === 'delComp'} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ลบบริษัท</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Select aria-label="Default select example" onChange={handleChange}>
            <option hidden value>Company</option>
            {list_company()}
          </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={()=>{send_DeleteCompany(); handleClose();}}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default PopupDelComp