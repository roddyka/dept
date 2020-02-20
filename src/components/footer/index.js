import React, { useState } from 'react';
import './style.css';
import { Col, Row } from 'reactstrap';

const Footer = () =>{
    return (
      <>
      
          <footer className="footer-distributed">
          <Row className="">
              <Col xs="3" sm="3"></Col>
              <Col xs="3" sm="3"><h4>DEPT</h4></Col>
              <Col xs="3" sm="3"><p class="footer-links">
                  <a href="#" className="menufooter">Home</a>
                  ·
                  <a href="#">Blog</a>
                  ·
                  <a href="#">Pricing</a>
                  ·
                  <a href="#">About</a>
                  ·
                  <a href="#">Faq</a>
                  ·
                  <a href="#">Contact</a>
                </p></Col>
              
              <Col xs="3" sm="3"></Col> 
          </Row>

        </footer>
      
      </>
    )
}

export default Footer;