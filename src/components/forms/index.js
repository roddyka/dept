import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Dropdown, Drop, DropdownMenu, DropdownItem, DropdownToggle
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import './style.css';
import api from '../../services/api';
import FlipMove from 'react-flip-move';


const Forms = () =>{
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  console.log(watch('example')) // watch input value by passing the name of it
    return (
      <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  )
      
    </>
    )
}

export default Forms;