import React, { Component } from 'react';
import axios, { all } from 'axios';
import {useState,useEffect} from "react";
import PopupAddComp from './Popup_addComp';
import PopupAddJob from './Popup_addJob';
import PopupEditJob from './Popup_editJob';
import job from './newspaper.png';


function Home() {

  //////////////////////// เอาไว้ดึงข้อมูลไปใส่ช่องทางซ้าย ////////////////////////
  const[jobs,setjobs] = useState([])

  const fetchData_jobs =(position,company,location)=>{
    axios
    .get(`http://localhost:8008/api/get/search/jobs?position=${position}&company=${company}&location=${location}`)
    .then(resp=>{
      setjobs(resp.data) 
      //console.log(resp.data)
    })
    .catch(err=>alert(err));
  }
  
  useEffect(()=>{
    fetchData_jobs(state_for_search.job_postings,state_for_search.company,state_for_search.location);
  },[])

  //////////////////////// เอาไว้ลบข้อมูล ////////////////////////

  const deleteJob =()=>{

    
    axios
    .delete(`http://localhost:8008/api/delete/job/${alldata_search.id}`)
    .then(resp=>{
      fetchData_jobs(state_for_search.job_postings,state_for_search.company,state_for_search.location);
      setalldata_search([]);
    })
    .catch(err=>alert(err));
    
  }

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
 

  const getdata_from_search =(id)=>{
    //console.log(position,company,location)
    axios
    .get(`http://localhost:8008/api/get/job/${id}`)
    .then(resp=>{
      //console.log(resp.data);
      setalldata_search(resp.data);
      window.id = id;
      window.jobdetial = resp.data;
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
      padding: "10px",
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
        width: "150px",
        marginTop: "10px",
        marginRight: '10px',
        
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
  const jjk = {
    overflowY: 'scroll',
    height: '65vh',
  };

  const [show, setShow] = useState(false);
  const handleClose = (popup) => setShow(popup);
  const handleShow = (popup) => setShow(popup);
      
      
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
            <button type="button" onClick={()=>fetchData_jobs(state_for_search.job_postings,state_for_search.company,state_for_search.location)} style={searchButtonStyle} >Search</button>
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
                  <div className='jobs row' style={jjk}>
                    {jobs.map((data,index)=>(
                        <button onClick={() => getdata_from_search(data.id)} style={{ background: 'white',border: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginBottom: '20px' }}>
                        <div key={index} className="col-md-12 mb-4 bg-white" >
                          <p>
                            <strong style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '30px', fontWeight: 'bold', color: '#f77100'}}>{data.jobposition}</strong>
                          </p>
                          <p style={{fontSize: '20px',fontWeight: 'bold', color: '#3b3b3b'}}>
                            {data.company.company_name}
                          </p>
                          <p style={{fontSize: '16px',fontWeight: 'bold', color: '#3b3b3b'}}>
                            {data.salary}
                          </p>
                        </div>
                        </button>
                    ))}
                  </div>
              </div>
          </div>
          <div className="col-md-8 col-md-pull-4">
            <button type="button" style={buttonStyle} onClick={() => handleShow('addComp')}>เพิ่มบริษัท</button>
            <PopupAddComp show={show} handleClose={handleClose}/>
            <button type="button" style={buttonStyle} onClick={() => handleShow('addJob')}>เพิ่มงาน</button>
            <PopupAddJob show={show} handleClose={handleClose}/>
            <button type="button" style={buttonStyle} onClick={() => handleShow('editJob')}>แก้ไขงาน</button>
            <PopupEditJob show={show} handleClose={handleClose}/>
            <button type="button" onClick={deleteJob} style={buttonStyle}>ลบงาน</button>

            <div  style={{ display: 'flex', marginBottom: '10px' ,marginRight: '10px',}}>
              
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '10px', height: 'auto', overflowY: 'scroll' }}>
            <h1></h1>
            {!alldata_search.jobposition ?(<>
              <h2 style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '60px', fontWeight: 'bold', color: '#3b3b3b'}}>Welcome to JobsTL</h2>
              <img src={job} width="500" height="600" style={{ maxWidth: '100%', height: 'auto' }}></img>
              </>):
              <div className='test_searchDATA' style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '40px', fontWeight: 'bold', color: '#A52A2A'}}>{alldata_search.jobposition}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '30px', fontWeight: 'bold', color: '#A52A2A'}}>{"company : "+alldata_search.company.company_name}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"email : " +alldata_search.company.email}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"location : "+alldata_search.company.location}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"marketcap : "+alldata_search.company.marketcap}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"telephone : "+alldata_search.company.telephone}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"website : "+alldata_search.company.website}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '40px', fontWeight: 'bold', color: '#A52A2A'}}>Job qualifications</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"education : "+alldata_search.education}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"gpax : "+alldata_search.gpax}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"jobrequirement : "+alldata_search.jobrequirement}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"salary : "+alldata_search.salary}</p>
                    <p style={{fontFamily: 'LINESeedSansTH_Bd', fontSize: '18px', fontWeight: 'bold', color: '#3b3b3b', textAlign: 'left'}}>{"toeic : "+alldata_search.toeic}</p>
                </div>
              }
            </div>
          </div>


            </div>
          </div>
        </div>
      </div>
      
      
    )
}
export default Home;