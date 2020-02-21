import React, { useState } from 'react';
import './style.css';
import { Col, Row } from 'reactstrap';
import api from '../../services/api';

const Footer = () =>{
    return (
      <>
      <footer class="mainfooter" role="contentinfo">
  <div class="footer-middle">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h4>Heading 1</h4>
          <ul class="list-unstyled">
          {api.content.menu.map((value, index) => {
                return  <li key={index}><a href="#">{value.name}</a></li>
              })}
        
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
      
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
         
        </div>
      </div>
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2018 - DEPT.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
      </>
    )
}

export default Footer;