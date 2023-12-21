import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const PageLogin = () => {
    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Login</h1>
                            <h6 className="subtitle">
                                Here you can check Demos we created based on
                                WrapKit. It's quite easy to create your own
                                dream website &amp; dashboard in no time.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md="6" style={{ paddingBottom: "100px" }}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">Email</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                            </FormGroup>
                            <FormGroup check className="ml-3 mb-3">
                                <Input
                                    id="checkbox1"
                                    type="checkbox"
                                    className="form-check-input"
                                />
                                <Label
                                    htmlFor="checkbox1"
                                    className="form-check-label"
                                >
                                    {" "}
                                    Remember me{" "}
                                </Label>
                            </FormGroup>
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    className="btn btn-success waves-effect waves-light m-r-10"
                                >
                                    Submit
                                </Button>
                                <Link to="/join">
                                    <Button className="btn btn-inverse waves-effect waves-light">
                                        Join
                                    </Button>
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageLogin;
