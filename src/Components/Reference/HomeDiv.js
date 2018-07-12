import React from 'react'
import { FormGroup, Row, Col,  } from 'reactstrap'
import Manila from '../../Assets/Image/Manila.jpg'
import Baguio from '../../Assets/Image/Baguio.jpg'
import Zambales from '../../Assets/Image/Zambales.jpg'
import Batanes from '../../Assets/Image/Batanes.jpg'

class HomeDiv extends React.Component {
    render() {
        return(
            <div>
                    <Row>
                        <Col md="3">
                            <div className="hovereffect">
                                <FormGroup>
                                    <a>
                                        <img src={Manila} className="manila-picture" alt="manila"/>                                       
                                    </a>
                                </FormGroup>
                                <div className="overlay">
                                    <h4>Manila</h4>
                                    <p>2500 Pesos ONLY!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="hovereffect">
                                <FormGroup>
                                    <a>
                                        <img src={Baguio} className="baguio-picture" alt="baguio"/>
                                    </a>
                                </FormGroup>
                                <div className="overlay">
                                    <h4>Baguio</h4>
                                    <p>2500 Pesos ONLY!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="hovereffect">
                                <a>
                                    <FormGroup>
                                        <img src={Zambales} className="zambales-picture" alt="zambales"/>
                                    </FormGroup>
                                </a>
                                <div className="overlay">
                                    <h4>Zambales</h4>
                                    <p>2500 Pesos ONLY!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="hovereffect">
                                <FormGroup>
                                    <a>
                                        <img src={Batanes} className="manila-picture" alt="batanes"/>
                                    </a>
                                </FormGroup>
                                <div className="overlay">
                                    <h4>Batanes</h4>
                                    <p>2500 Pesos ONLY!</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default HomeDiv;