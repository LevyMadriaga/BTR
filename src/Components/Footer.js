import React from 'react'
import { Container, Row, Col, FormGroup, } from 'reactstrap'
import Icon from 'react-fontawesome'

class HomeDiv1 extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="3">
                            <FormGroup>
                                <h4 className="title-one-footer">BTR</h4>
                            </FormGroup>
                            <FormGroup className="row-one-footer">
                                <a>
                                    <p>Help</p>
                                </a>
                                <a>
                                    <p>About</p>
                                </a>
                                <a>
                                    <p>Policies</p>
                                </a>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <h4 className="title-two-footer">Discover</h4>
                            </FormGroup>
                            <FormGroup className="row-two-footer">
                                <a>
                                    <p>Trust & Safety</p>
                                </a>
                                <a>
                                    <p>Gift Cards</p>
                                </a>
                                <a>
                                    <p>Guidebooks</p>
                                </a>
                                <a>
                                    <p>Events</p>
                                </a>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <h4 className="title-three-footer">Hosting</h4>
                            </FormGroup>
                            <FormGroup className="row-three-footer">
                                <a>
                                    <p>Why Host</p>
                                </a>
                                <a>
                                    <p>Hospitality</p>
                                </a>
                                <a>
                                    <p>Responsible Hosting</p>
                                </a>
                                <a>
                                    <p>Community Center</p>
                                </a>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <h4 className="title-four-footer">Social Media</h4>
                            </FormGroup>
                            <FormGroup>
                                <Icon name="camera-retro"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="line"></div>
                    <Row>
                        <Col md="3">
                            <FormGroup>
                                <h5 className="title-one-copy">BTR</h5>
                                <p className="copy-right">© BTR, Inc.</p>
                            </FormGroup>
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomeDiv1;