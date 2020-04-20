import React from 'react';
import {Container, Row, Image, Col} from 'react-bootstrap/';
import TeamCard from '../team-card/team-card';

export default class Home extends React.Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        Your teams
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TeamCard></TeamCard>
                    </Col>
                </Row>
            </Container>
        )
    }
}