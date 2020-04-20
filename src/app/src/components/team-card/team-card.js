import React from 'react';
import './team-card.scss';
import {Container, Row, Image, Col} from 'react-bootstrap/';

export default class TeamCard extends React.Component{
    render(){
        return (
            <div className="team-card">
                <Row className="no-gutters">
                    <Col>
                        <Image src={require('./../../images/pangolier.png')}></Image>
                    </Col>
                    <Col>
                        <Image src={require('./../../images/invoker.png')}></Image>
                    </Col>
                    <Col>
                        <Image src={require('./../../images/puck.png')}></Image>
                    </Col>
                    <Col>
                        <Image src={require('./../../images/barathum.png')}></Image>
                    </Col>
                    <Col>
                        <Image src={require('./../../images/rhasta.png')}></Image>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Home Rejecteds
                    </Col>
                </Row>
            </div>
        )
    }
}