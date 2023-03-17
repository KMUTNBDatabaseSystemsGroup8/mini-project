import React, { Component } from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";

function Home() {

  // เอาไว้ดึงข้อมูลไปใส่
  const[datas,setdatas] = useState([])

  const fetchData =()=>{
    axios
    .get('http://localhost:8008/api/test')
    .then(resp=>{
      setdatas(resp.data) 
      console.log(resp.data)
    })
    .catch(err=>alert(err));
  }
  useEffect(()=>{
    fetchData()
  },[])
 ///////////////////////// for search buttons //////////////////////////////
  const [state_for_search,setState] = useState({
    company:"",
    job_postings:"",
    location:"",
    object:""
  })
  const {company,job_postings,location,object} = state_for_search

  //กำหนดค่าstate
  const inputValue_forsearch=name=>event=>{
    //console.log(name,"=",event.target.value)
    setState({...state_for_search,[name]:event.target.value})
  }

  ///////////////////////// for send //////////////////////////////
  const [state_for_send,setState_send] = useState({
    job_postings1:"",
    job_postings2:"",
    job_postings3:"",
  })

  const {job_postings1,job_postings2,job_postings3} = state_for_send

  const inputValue_for_send=name=>event=>{
    //console.log(name,"=",event.target.value)
    setState_send({...state_for_send,[name]:event.target.value})
  }

  //////////////////////////////////////////////////////////
  const add_company =()=>{
    console.log("send from add_company()",{company,job_postings,location,object})
    axios
    .post('http://localhost:8008/api/add_company',{company,job_postings,location,object})
    .then(resp=>{
      setdatas(resp.data) 
      console.log(resp.data)
    })
    .catch(err=>alert(err));
  }

  ///////////////////////////////////////////////////////////
  const add_job_postings =()=>{
    console.log("send from add_job_postings()",{job_postings1,job_postings2,job_postings3})
    axios
    .post('http://localhost:8008/api/add_jobposting',{job_postings1,job_postings2,job_postings3})
    .then(resp=>{
      setdatas(resp.data) 
      console.log(resp.data)
    })
    .catch(err=>alert(err));
  }


  const searchBarStyle = {
      fontFamily: 'LINESeedSansTH_A_Rg',
      backgroundColor: "#3b3b3b",
      color: "white",
      padding: "10px"
  };
  const textStyle = {
        backgroundColor: "white",
        border: "none",
        borderRadius: "5px",
        fontFamily: 'LINESeedSansTH_A_Rg',
        color: "#3b3b3b",
        fontSize: "20px",
        marginRight: "10px",
        width: "100%",
        padding: "10px",
        marginTop: "10px"
  };
  const searchBoxStyle = {
      fontFamily: 'LINESeedSansTH_A_Rg',
      backgroundColor: "white",
      border: "none",
      borderRadius: "5px",
      color: "#3b3b3b",
      height: "55px",
      fontSize: "20px",
      marginRight: "10px",
      marginTop: "10px",
      marginBottom:"50px",
      width: "100%"
  };
    const searchButtonStyle = {
      fontFamily: 'LINESeedSansTH_A_Rg',
      backgroundColor: "transparent",
      border: "2px solid white",
      borderRadius: "5px",
      color: "white",
      fontSize: "20px",
      padding: "10px",
      width: "70%",
      marginTop: "10px"
  };
    
  const buttonStyle = {
      fontFamily: 'LINESeedSansTH_A_Rg',
        backgroundColor: "#f77100",
        border: "none",
        borderRadius: "5px",
        color: "white",
        fontSize: "20px",
        padding: "10px",
        width: "20%",
        marginTop: "10px",
        marginRight: '10px'
  };
  const scrollBoxStyle = {
        height: "200px",
        overflowY: "scroll",
        padding: "10px"
  };
  const bgStyle = {
        fontFamily: 'LINESeedSansTH_A_Rg',
        backgroundColor: '#f7f8fb',
        height: '100vh', // fill the screen vertically
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
  };
      
      
  return (<div>
      <div style={searchBarStyle}>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <input type="text" onChange={inputValue_forsearch("job_postings")} placeholder="ตำแหน่งงาน" style={searchBoxStyle} />
      </div>
      <div className="col-md-4">
        <input type="text" onChange={inputValue_forsearch("company")} placeholder="บริษัท" style={searchBoxStyle} />
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-8">
            <input type="text" onChange={inputValue_forsearch("location")} placeholder="สถานที่ทำงาน" style={searchBoxStyle} />
          </div>
          <div className="col-md-4">
            <button type="button" style={searchButtonStyle} >Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <div style={bgStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-push-8">
                <div style={{ backgroundColor: 'white', padding: '10px', height: 'auto',marginTop: '60px' }}>
                  {datas.id}
                </div>
              </div>
              <div className="col-md-8 col-md-pull-4">
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <button type="button" onClick={add_company} style={buttonStyle}>เพิ่มบริษัท</button>
                  <button type="button" onClick={add_job_postings} style={buttonStyle}>เพิ่มงาน</button>
                </div>
                <div style={{ backgroundColor: 'white', padding: '10px', height: '100px', overflowY: 'scroll' }}>
                  {datas.meow}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}
export default Home;