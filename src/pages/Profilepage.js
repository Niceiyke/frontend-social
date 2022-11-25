import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';

const Profilepage = () => {
  return (

    <Container fluid>
    <Row>
      <Col xs={4} md={2}>
      <Sidebar />
      </Col>
      <Col xs={6} md={6}>
      <div className='Profile'>
        <div className='coverpage'></div>
        <div className='profilebio'></div>
        <div className='profilefeed'>
        <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <Feed />
       
      </Tab>
      <Tab eventKey="profile" title="Profile">
     
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
      
      </Tab>

    </Tabs>
        </div>
    </div>

      </Col>
      <Col xs={2} md={4}>
        <Widget />
      </Col>
    </Row>
    </Container>

  )
}

export default Profilepage