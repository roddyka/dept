import React, { useState ,useEffect} from 'react';
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";
import api from './services/api';
import HeaderMenu from './components/header/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner';
import { Container, Row, Form } from 'reactstrap';
import Content from './components/content'; 
import Footer from './components/footer';
import Contact from './components/contact';
import Forms from './components/forms';

function App() {

  return (
    <div id="app">
     <HeaderMenu/>
      <Container> 
    
      <Banner/>
        <Row>
          <Content/>
        </Row>
        <Row className="contact">
          <Contact/>
          {/* <Forms/> */}
        </Row>
      
      </Container>  <Footer/>
      
    </div>
  );
}

export default App;
