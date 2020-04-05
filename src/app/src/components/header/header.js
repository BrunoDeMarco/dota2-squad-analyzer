import React from 'react';
import './header.scss';
import logo from './../../images/logo.png';
import {Container, Row, Image, Col} from 'react-bootstrap/';

export default class Header extends React.Component{
  render(){
    return (
      <Container fluid>
        <Row className="align-items-center">
            <Col xs={2} sm={1} className="text-center">
                <Image src={logo}></Image>
            </Col>
            <Col>
                <div className="title">Dota 2 Squad Analyzer</div>
            </Col>
        </Row>
      </Container>
    )
  }
}