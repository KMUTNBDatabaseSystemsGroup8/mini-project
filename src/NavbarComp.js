import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default class NavbarComp extends Component {
    render() {
      const brandStyle = {
        fontFamily: 'LINESeedSansTH_Bd',
        fontSize: "30px",
        fontWeight: "bold",
        color: "white",
        marginRight: "10px"
      };
      const brandSubStyle = {
        fontFamily: 'LINESeedSansTH_A_Rg',
        fontSize: "14px",
        color: "white"
      };
      const navbarStyle = {
        backgroundColor: "#f47404"
      };
      return (
        <div>
          <Navbar style={navbarStyle} variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <span style={brandStyle}>JobsTL</span> 
                <span style={brandSubStyle}>by KMUTNB</span>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </div>
      )
    }
  }