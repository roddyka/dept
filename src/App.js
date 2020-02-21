import React, { useState ,useEffect} from 'react';
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";
import api from './services/api';
import HeaderMenu from './components/header/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner';
import { Container, Row } from 'reactstrap';
import Content from './components/content'; 
import Footer from './components/footer';
import Contact from './components/contact';

function App() {

  return (
    <div id="app">
    
      <Container> 
     <HeaderMenu/>
      <Banner/>
        <Row>
          <Content/>
        </Row>
        <Row className="contact">
          <Contact/>
        </Row>
        <Footer/>
      </Container>
      
    </div>
  );
}

export default App;
