import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Dropdown, Drop, DropdownMenu, DropdownItem, DropdownToggle, Badge
} from 'reactstrap';
import './style.css';
import api from '../../services/api';
import FlipMove from 'react-flip-move';
const Content = () =>{

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <>
      {api.content.body.map((value, index) => {
        
                return <Col xs="12" sm="6" key={index}>
                <Card className="card">
                  <CardImg top width="100%" src={value.img}  alt="Card image cap" className="cardImg"/>
                  <CardBody className="cardBody">
                    <CardTitle className="cardTitle">{value.title}<Badge color="secondary" className={value.class}>{value.new}</Badge></CardTitle>
                    <CardSubtitle className="cardSubTitle">{value.subtitle}</CardSubtitle>
                    <div className="cardButton">> {value.button}</div>
                  </CardBody>
                </Card>
                </Col>
              })}
      
    </>
    )
}

export default Content;