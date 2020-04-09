import React from 'react';
import './header.scss';
import logo from './../../images/logo.png';
import {Container, Row, Image, Col} from 'react-bootstrap/';

export default class Header extends React.Component{
  render(){
    return (
      <Container fluid>
        <Row className="align-items-center justify-content-center">
            <Col xs={"auto"} className="text-center">
                <Image src={logo}></Image>
            </Col>
            <Col className="title">
                <div>Dota 2 Squad Analyzer</div>
            </Col>
        </Row>
      </Container>
    )
  }
}