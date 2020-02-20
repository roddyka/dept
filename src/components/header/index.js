import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './style.css';
import api from '../../services/api';

const Header = () =>{

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="menu">  
          <Navbar color="faded" light >
            <NavbarBrand href="/" className="mr-auto">DEPT</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar className="nav">
              <Nav navbar>
              {api.content.menu.map((value, index) => {
                return <NavItem key={index}>
                  <NavLink href="/components/"><p>{value.name}</p></NavLink>
                </NavItem>
              })}
                
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    )
}

export default Header;