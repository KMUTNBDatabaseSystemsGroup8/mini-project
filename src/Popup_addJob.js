import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from "react";
import axios from 'axios';
import { localenv } from './env.js';



const PopupAddJob = ({show,handleClose}) => {

    const[company_fetch,setfetch] = useState([]) // ข้อมูลบริษัท(id,name) เก็บอยู่ใน company_fetch เป็น array

    const fetchData_company =()=>{
      axios
      .get(localenv.apiHostname+"/api/get/companies")
      .then(resp=>{
        setfetch(resp.data) 
        console.log("from fetchData_company : ",resp.data)
      })
      .catch(err=>alert(err));
    }
    useEffect(()=>{
      fetchData_company();
    },[])

    const [state,setState] = useState({
      jobposition:"",
      education:"",
      toeic:"",
      gpax:"",
      company:"",
      company_id:"",
      salary:"",
      jobrequirement:"",
      availablecount : " "
    })
    const {jobposition,education,toeic,gpax,company,company_id,salary,jobrequirement,availablecount} = state

    //กำหนดค่าstate
    const inputValue=name=>event=>{
      if (name != "company"){
        //console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
      }
      else{
        setState({...state,[name]:event.target.value})
        console.log(name,"=",event.target.value)
        let i = 0;
        while( i < company_fetch.length){
          if(String(event.target.value) == String(company_fetch[i].company_name)){
            setState({...state,company_id:`${company_fetch[i].id}`})
            //console.log("Match : "+company_id)
            break;
          }
          //console.log("dont match : " + i)
          i++;
        }
      }     
    }
    //-------------------------------------------------------------------------
    const send_addjob = () => {
      var dummy_TOEIC = parseInt(toeic)
      var dummy_GPAX = parseFloat(gpax)
      var dummy_CompanyID = parseInt(company_id)
      var dummy_Availablecount = parseInt(availablecount)
      console.log({jobposition,education,toeic:dummy_TOEIC,gpax:dummy_GPAX,jobrequirement,salary,company_id:dummy_CompanyID,availablecount:dummy_Availablecount})
      axios
      .post((localenv.apiHostname+"/api/new/job"),{jobposition,education,toeic:dummy_TOEIC,gpax:dummy_GPAX,jobrequirement,salary,company_id:dummy_CompanyID,availablecount:dummy_Availablecount})
      .then(console.log("complete"))
      .catch(err => {
        console.log(err.response.data.error +" "+ err.response.data.message)
        })
    }

    return (
        <Modal show={show === 'addJob'} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มงาน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" onChange={inputValue("jobposition")} placeholder="Job Position" autoFocus/>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" onChange={inputValue("company")} placeholder="Company" autoFocus/>
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" onChange={inputValue("education")} placeholder="Education" autoFocus />
            <Form.Label>Toeic</Form.Label>
            <Form.Control type="text" onChange={inputValue("toeic")} placeholder="Toeic" autoFocus/>
            <Form.Label>GPAX</Form.Label>
            <Form.Control type="text" onChange={inputValue("gpax")} placeholder="GPAX" autoFocus/>
            <Form.Label>Availablecount</Form.Label>
            <Form.Control type="text" onChange={inputValue("availablecount")} placeholder="Availablecount" autoFocus/>
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" onChange={inputValue("salary")} placeholder="Salary" autoFocus/>
            <Form.Group className="mb-3" onChange={inputValue("jobrequirement")} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Job Requirement</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={send_addjob}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default PopupAddJob