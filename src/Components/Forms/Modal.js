import React from 'react';
import {    Button, 
            Modal, 
            ModalHeader, 
            ModalBody, 
            ModalFooter,
            Input,
            FormGroup,
            Row,
            Col } from 'reactstrap';

export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalHide = this.modalHide.bind(this);
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        }
    
    modalHide() {
        this.setState({
            show:false
        })
    }

  render() {
    return (

        <div>
        <div className="nav-link" onClick={this.toggle}>Login</div>
        <Modal isOpen={this.state.show}>
            <form onSubmit={this.handleSubmit}>
                <ModalHeader>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md="1"></Col>
                        <Col md="10">
                        <FormGroup>
                            <Input 
                                type="text"
                                className="form-control"
                                placeholder="Username"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                type="submit"
                                className="btn btn-success"
                                value="Submit"
                            />
                        </FormGroup>
                        </Col> 
                        <Col md="1"></Col>
                    </Row>    
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="btn btn-danger"
                        onClick={this.modalHide}
                    >
                    Modal Close
                    </Button>
                </ModalFooter>
            </form>
        </Modal>
        </div>
    );
  }
}