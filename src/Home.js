import React, { Component } from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";

function Home() {

  //////////////////////// เอาไว้ดึงข้อมูลไปใส่ช่องทางซ้าย ////////////////////////
  const[jobs,setjobs] = useState([])

  const fetchData_jobs =()=>{
    axios
    .get('http://localhost:8008/api/get/jobs')
    .then(resp=>{
      setjobs(resp.data) 
      //console.log(resp.data)
    })
    .catch(err=>alert(err));
  }
  useEffect(()=>{
    fetchData_jobs()
  },[])

 ///////////////////////// for search buttons //////////////////////////////
  const [state_for_search,setState] = useState({
    company:"",
    job_postings:"",
    location:"",
  })
  const {company,job_postings,location} = state_for_search

  //กำหนดค่าstate
  const inputValue_forsearch=name=>event=>{
    //console.log(name,"=",event.target.value)
    setState({...state_for_search,[name]:event.target.value})
  }
  //-------------------------------------------------------------------------

  //////////////////////////// search api ////////////////////////////////////
  const[alldata_search,setalldata_search] = useState([])

  const getdata_from_search =()=>{
    axios
    .get(`http://localhost:8008/api/get/search/jobs?position=${state_for_search.job_postings}&company=${state_for_search.company}&location=${state_for_search.location}`)
    .then(resp=>{
      setalldata_search(resp.data)
      console.log(resp.data)
      //console.log(resp.data[0].company.company_name)
      //console.log(resp.data[0].jobposition)
      //console.log(resp.data[0].company.location)
    })
    .catch(err=>alert(err));
  }
  //--------------------------------------------------------------------------
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
        height: 'auto', 
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
            <button type="button" onClick={getdata_from_search} style={searchButtonStyle} >Search</button>
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
                <div style={{padding: '10px', height: 'auto',marginTop: '60px' }}>
                  <div className='jobs row'>
                    {jobs.map((data,index)=>(
                    <div key={index} className="col-md-12 mb-4 bg-white" style={{border: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginBottom: '20px'}}>
                    <p><strong style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '30px', fontWeight: 'bold', color: '#f77100'}}>{data.jobposition}</strong></p>
                    <p style={{fontSize: '20px',fontWeight: 'bold', color: '#3b3b3b'}}>{data.company.company_name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-8 col-md-pull-4">
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <button type="button" style={buttonStyle}>เพิ่มบริษัท</button>
              <button type="button" style={buttonStyle}>เพิ่มงาน</button>
            </div>
            <div style={{ backgroundColor: 'white', padding: '10px', height: '600px', overflowY: 'scroll' }}>
              {alldata_search.map((data,index)=>(
                <div className='test_searchDATA' key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '30px', fontWeight: 'bold', color: '#f77100'}}>{data.jobposition}</p>
                  <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '20px', fontWeight: 'bold', color: 'red'}}>{data.company.company_name}</p>
                  <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b'}}>{data.company.location}</p>
                </div>
              ))}
            </div>
          </div>


            </div>
          </div>
        </div>
      </div>
      
      
    )
}
export default Home;