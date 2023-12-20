import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const PageLogin = () => {
    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Login</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" style={{ paddingBottom: '100px' }}>
                        <Form>
                            <Row>
                                <FormGroup className="col-md-6">
                                    <Label htmlFor="name">Email</Label>
                                    <Input type="text" className="form-control" id="name" placeholder="Ex) a000000@aivle.kt.co.kr" />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup className="col-md-6">
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" className="form-control" id="password" placeholder="Password" />
                                </FormGroup>
                            </Row>
                            
                            <FormGroup className="col-md-12 ml-3">
                                <Input id="checkbox1" type="checkbox" />
                                <Label htmlFor="checkbox1"> Remember me </Label>
                            </FormGroup>
                            <Col md="12">
                                <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                                <Link to="/join">
                                    <Button className="btn btn-inverse waves-effect waves-light">Join</Button>
                                </Link>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageLogin;
