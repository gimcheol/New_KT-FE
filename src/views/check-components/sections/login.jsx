import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const PageLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://9714-211-216-239-233.ngrok-free.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                "email": email,
                "password": password,
            }),
        })
        .then(res => {
            if (res.status !== 200) {
                throw Error(res);
            }
            return res.json();
        })
        .then(res => {
            localStorage.setItem('accessToken', res.access);
            localStorage.setItem('refreshToken', res.refresh);
            
            alert(`${res.username}님 환영합니다.`);
            window.location.href = "/Home";

        })
        .catch((err) => {
            console.error(err);
        })
    }

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
                                    placeholder="Ex) a000000@aivle.kt.co.kr"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
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
                                    onClick={handleSubmit}
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
