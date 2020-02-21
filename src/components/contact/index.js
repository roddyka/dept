import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText , Col
} from 'reactstrap';
import './style.css';
import api from '../../services/api';
import FlipMove from 'react-flip-move';
const Contact = () =>{

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <>
      <Col sx="2" sm="2"></Col>
     <Col sx="8" sm="8" >
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            
          </FormGroup>
          
          <FormGroup>
          <Label for="exampleText">Message</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <FormText color="muted">
              Send us a E-mail.
            </FormText>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
    </Col>
    <Col sx="2" sm="2"></Col>
    </>
    )
}

export default Contact;