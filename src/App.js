import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './App.css'
import SideBar from './components/HeaderTab/SideBar'

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
          <SideBar/>
          </Col>

          <Col>
            <h1>HEllo</h1>
          
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default App;
