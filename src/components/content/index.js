import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

import './style.css';

const Content = () =>{

    return (
      <>
      <Col sm="12" sm="6">
        <Card className="card">
          <CardImg top width="100%" src="https://voicedesign.net/wp-content/uploads/2019/08/voice-design-mead-winelabel-maxwell-2-1400x940.jpg" alt="Card image cap" className="cardImg"/>
          <CardBody className="cardBody">
            <CardTitle className="cardTitle">Card title</CardTitle>
            <CardSubtitle className="cardSubTitle">Card subtitle</CardSubtitle>
            <div className="cardButton">> View Case</div>
          </CardBody>
        </Card>
      </Col>

      <Col sm="12" sm="6" >
        <Card className="card">
          <CardImg top width="100%" src="https://voicedesign.net/wp-content/uploads/2019/08/voice-design-mead-winelabel-maxwell-2-1400x940.jpg" alt="Card image cap" className="cardImg"/>
          <CardBody className="cardBody">
            <CardTitle className="cardTitle">Card title</CardTitle>
            <CardSubtitle className="cardSubTitle">Card subtitle</CardSubtitle>
            <div className="cardButton">> View Case</div>
          </CardBody>
        </Card>
      </Col>
    </>
    )
}

export default Content;