import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Link } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

const Index = (props) => {
    return (
            <React.Fragment>
            <Container>
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5} >
                                <Card className="bg-pattern">
                                    <CardBody className="p-4 position-relative">

                                        <div className="text-center w-75 m-auto">
                                            <a href="/">
                                                <span><img src="" alt="" height="22" /></span>
                                            </a>
                                            <p className="text-muted mb-4 mt-3">Enter your username and password to access admin panel.</p>
                                        </div>



                                        <AvForm>
                                            <AvField name="username" label="Username" placeholder="Enter your username" value="" required />

                                            <AvGroup className="mb-3">
                                                <Label for="password">Password</Label>
                                                <AvInput type="password" name="password" id="password" placeholder="Enter your password" value="" required />
                                                <AvFeedback>This field is invalid</AvFeedback>
                                            </AvGroup>

                                            <FormGroup>
                                                <Button color="primary" className="btn-block">Log In</Button>
                                            </FormGroup>

                                            <p><strong>Username:</strong> test &nbsp;&nbsp; <strong>Password:</strong> test</p>
                                        </AvForm>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col className="col-12 text-center">
                                <p><a href="/forget-password" className="text-white-50 ml-1">Forgot your password?</a></p>
                                <p className="text-white-50">Don't have an account? <a href="/register" className="text-white ml-1"><b>Register</b></a></p>
                            </Col>
                        </Row>

                    </Container>
    </React.Fragment>
            );
}

export default Index;

if (document.getElementById('main')) {
    ReactDOM.render(<Index />, document.getElementById('main'));
}
