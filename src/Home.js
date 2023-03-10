import React, { Component } from 'react';



export default class Home extends Component {
  render() {
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
        <input type="text" placeholder="ตำแหน่งงาน" style={searchBoxStyle} />
      </div>
      <div className="col-md-4">
        <input type="text" placeholder="บริษัท" style={searchBoxStyle} />
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-8">
            <input type="text" placeholder="สถานที่ทำงาน" style={searchBoxStyle} />
          </div>
          <div className="col-md-4">
            <button type="button" style={searchButtonStyle}>Search</button>
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
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" placeholder="ตำแหน่งงาน" style={textStyle} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" placeholder="ตำแหน่งงาน" style={textStyle} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" placeholder="ตำแหน่งงาน" style={textStyle} />
                </div>
              </div>
              <div className="col-md-8 col-md-pull-4">
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <button type="button" style={buttonStyle}>เพิ่มบริษัท</button>
                  <button type="button" style={buttonStyle}>เพิ่มงาน</button>
                </div>
                <div style={{ backgroundColor: 'white', padding: '10px', height: '100px', overflowY: 'scroll' }}>
                  KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB KMUTNB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
