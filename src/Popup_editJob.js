import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from "react";
import axios from 'axios';
import { localenv } from './env.js';



const PopupEditJob = ({show,handleClose}) => {

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
    var jobid = 0;

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
    
    const getdata_from_search =()=>{
      //console.log(position,company,location)
     console.log(window.jobdetial);
     
     console.log("Set State");
     document.getElementById('jobposition').value = window.jobdetial.jobposition;
     document.getElementById('education').value = window.jobdetial.education;
     document.getElementById('toeic').value = window.jobdetial.toeic;
     document.getElementById('gpax').value = window.jobdetial.gpax;
     document.getElementById('jobrequirement').value = window.jobdetial.jobrequirement;
     document.getElementById('availablecount').value = window.jobdetial.availablecount;
     document.getElementById('salary').value = window.jobdetial.salary;
     document.getElementById('company').value = window.jobdetial.company_id;
     
     setState({
      jobposition: window.jobdetial.jobposition,
      education: window.jobdetial.education,
      toeic: window.jobdetial.toeic,
      gpax: window.jobdetial.gpax,
      company: window.jobdetial.company.company_name,
      company_id: window.jobdetial.company_id,
      salary: window.jobdetial.salary,
      jobrequirement: window.jobdetial.jobrequirement,
      availablecount :  window.jobdetial.availablecount
    });

    }

    
    
    
    const inputValue=name=>event=>{
      if (name != "company"){
        console.log(name,"=",event.target.value)
        setState({...state,[name]:event.target.value})
      } 
    }
    //-------------------------------------------------------------------------
    const send_addjob = () => {
      const {jobposition,education,toeic,gpax,company,company_id,salary,jobrequirement,availablecount} = state
      var dummy_TOEIC = parseInt(toeic)
      var dummy_GPAX = parseFloat(gpax)
      var dummy_CompanyID = parseInt(company_id)
      var dummy_Availablecount = parseInt(availablecount)
      
      console.log({jobposition,education,toeic:dummy_TOEIC,gpax:dummy_GPAX,jobrequirement,salary,company_id:dummy_CompanyID,availablecount:dummy_Availablecount})
      /*
      axios
      .post((localenv.apiHostname+"/api/new/job"),{jobposition,education,toeic:dummy_TOEIC,gpax:dummy_GPAX,jobrequirement,salary,company_id:dummy_CompanyID,availablecount:dummy_Availablecount})
      .then(console.log("complete"))
      .catch(err => {
        console.log(err.response.data.error +" "+ err.response.data.message)
        })
        */
    }

    const list_company = () => {
      let arr = [];
  
      for(const data of company_fetch){
        arr.push(<option value={data.id}>{data.company_name}</option>)
      }
      return arr ;
    }
    
    const handleChange = event => {
      //console.log(event.target.value);
      setState({...state,company_id:event.target.value});
    };

    return (
        <Modal show={show === 'editJob'} onHide={handleClose} onShow={() => {getdata_from_search()} }>
        <Modal.Header closeButton>
          <Modal.Title>แก้ไขงาน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" id="jobposition" onChange={inputValue("jobposition")} placeholder="Job Position" autoFocus/>
            <Form.Label>Company</Form.Label>
            
            <Form.Select aria-label="Default select example"  id="company" onChange={handleChange}>
              <option hidden value >Company</option>
              {list_company()}
            </Form.Select>
            <Form.Label>Education</Form.Label>
            <Form.Control type="text"  id="education" onChange={inputValue("education")} placeholder="Education" autoFocus />
            <Form.Label>Toeic</Form.Label>
            <Form.Control type="text"  id="toeic" onChange={inputValue("toeic")} placeholder="Toeic" autoFocus/>
            <Form.Label>GPAX</Form.Label>
            <Form.Control type="text"  id="gpax" onChange={inputValue("gpax")} placeholder="GPAX" autoFocus/>
            <Form.Label>Availablecount</Form.Label>
            <Form.Control type="text"  id="availablecount" onChange={inputValue("availablecount")} placeholder="Availablecount" autoFocus/>
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" id="salary" onChange={inputValue("salary")} placeholder="Salary" autoFocus/>
            <Form.Group className="mb-3"  onChange={inputValue("jobrequirement")}>
              <Form.Label>Job Requirement</Form.Label>
              <Form.Control as="textarea" rows={3} id="jobrequirement"/>
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={()=>{send_addjob();handleClose();}}>Save</Button>
        </Modal.Footer>
      </Modal>

    );
  };
  export default PopupEditJob