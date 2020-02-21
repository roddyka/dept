import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText , Col
} from 'reactstrap';
import './style.css';
import api from '../../services/api';
import FlipMove from 'react-flip-move';
import { useForm } from 'react-hook-form';
const Contact = () =>{

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <>
      <Col sx="2" sm="2"></Col>
     <Col sx="8" sm="8" >
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="example" id="exampleEmail" placeholder="with a placeholder"  ref={register} />
            
          </FormGroup>
          
          <FormGroup>
          <Label for="exampleText">Message</Label>
            <Input type="textarea"  name="exampleRequired" id="exampleText" ref={register({ required: true })}/>
            {errors.exampleRequired && <span>This field is required</span>}
          </FormGroup>
          <FormGroup>
            <FormText color="muted">
              Send us a E-mail.
            </FormText>
          </FormGroup>
          <Input type="submit" className="btn btn-success">Submit</Input>
        </Form>
    </Col>
    <Col sx="2" sm="2"></Col>
    </>
    )
}

export default Contact;