import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const PageLogin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                "username": userName,
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
                    <Col md="6" style={{ paddingBottom: "180px" }}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">ID</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="a000000"
                                    value={userName}
                                    onChange={handleUserNameChange}
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

                            {/* <FormGroup check className="ml-3 mb-3">
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
                            </FormGroup> */}
                            
                            <div className="text-center" style={{ marginTop: "30px" }}>
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
