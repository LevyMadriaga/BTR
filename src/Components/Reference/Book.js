import React from 'react';
import { Row, Col, FormGroup, Input, Label, Card, CardBody,} from 'reactstrap'


class Book extends React.Component {
    constructor() {
        super()
            this.state = {
                disableDiv:false,
            }

        this.Toggleshow = this.Toggleshow.bind(this)
        this.Handlesubmit = this.Handlesubmit.bind(this)
        this.Togglehide = this.Togglehide.bind(this)
    }
    Toggleshow() {
        this.setState({
            disableDiv:true
        })
    }
    Togglehide() {
        this.setState({
            disableDiv:false,
        })
        this.myFormRef.reset();
    }
    Handlesubmit(event){
        event.preventDefault();
    }

    render() {
        var divStyle = {
            display:this.state.disableDiv?'block':'none'
          };
        return(
            <div className="Hello">
                <div className="Hello1">
                    <form onSubmit={this.Handlesubmit} ref={(el) => this.myFormRef = el}>
                        <Row className="div-1">         
                            <Col md="1">
                            </Col>               
                            <Col md="4">
                                <Card className="card card-margin">
                                    <CardBody>
                                        <FormGroup>
                                            <h1>Find bus on BTR</h1>
                                            <p className="other-text">Bus trips just got smarter!</p>
                                        </FormGroup>
                                        <FormGroup>
                                            <h5>Search Bus Trip</h5>
                                        </FormGroup>
                                        {/* <Forms
                                            schema={SearchForm}
                                            uiSchema={SearchUi}
                                        /> */}
                                        <FormGroup>
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <Label>
                                                        <Input 
                                                            type="radio"
                                                            name="choice"
                                                            className="radio-choices"
                                                            onClick={this.Togglehide}
                                                            defaultChecked
                                                        />
                                                        <span>One Way</span>
                                                    </Label>
                                                </Col>
                                                <Col xs="6" md="6">
                                                    <Label>
                                                        <Input 
                                                            type="radio"
                                                            name="choice"
                                                            className="radio-choices"
                                                            onClick={this.Toggleshow}
                                                        />
                                                        <span>Round Trip</span>
                                                    </Label>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <span className="float-left">Origin</span>
                                            <select className="form-control" id="Origin">
                                                <option></option>
                                                <option value="">Monumento</option>
                                                <option value="">Baclaran</option>
                                            </select>
                                        </FormGroup>
                                        <FormGroup>
                                            <span className="float-left">Destination</span>
                                            <select className="form-control" id="Destination">
                                                <option></option>
                                                <option value="">Baguio</option>
                                                <option value="">Bulacan</option>
                                            </select>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col md="6">
                                                    <div>
                                                        <span className="float-left">Travel Date</span>
                                                        <OneWay/>                                                         
                                                    </div>   
                                                </Col>
                                                <Col md="6">
                                                    <div style={divStyle}>
                                                        <span className="float-left">Returning Date</span>
                                                        <RoundTrip/> 
                                                    </div>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <span className="float-left">Quantity</span>
                                            <Input 
                                                type="number"
                                                min="1"
                                                max="15"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="submit"
                                                value="Search"
                                                className="btn btn-danger btn-search"
                                            />
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="7">

                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        )
    }
}

class OneWay extends React.Component {
    render() {
        return(
            <div>
                <Input
                    type="date"
                    ref="fielddate"
                />
            </div>
        )
    }
}

class RoundTrip extends React.Component {
    render() {
        return(
            <div>
                <Input
                    type="date"
                />
            </div>
        )
    }
}

export default Book;