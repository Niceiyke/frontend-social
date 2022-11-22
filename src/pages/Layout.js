import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Homepage from './Homepage';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4} md={2}>
        <Sidebar />
        </Col>
        <Col xs={6} md={6}>
          <Homepage />
        </Col>
        <Col xs={2} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      </Container>
  )
}

export default Layout