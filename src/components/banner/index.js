import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 
import './style.css';

function Banner(){

    return (
      <div className="image">
        <div className="titleBanner">WORK</div>
        <div className="text-right">
          <button className="Rectangle-4"><span className="viewCase">VIEW CASE</span></button>
        </div>
      </div>
    )
}

export default Banner;