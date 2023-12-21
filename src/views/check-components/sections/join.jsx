import React, { useState } from "react";
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

import HeaderBanner3 from "../../../components/banner/banner3.jsx";
import Footer from "../../../components/footer/footer.jsx";

const validatePwd = (password) => {
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^*+=-]/.test(password);
    const hasAlphabet = /[a-zA-Z]/.test(password);

    const numOfConditions = [hasNumber, hasSpecial, hasAlphabet].filter(
        Boolean
    ).length;

    if (numOfConditions === 2) {
        return /.{10,16}$/.test(password);
    } else if (numOfConditions === 3) {
        return /.{8,16}$/.test(password);
    } else {
        return false;
    }
};

const SignupForm = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validatePwd(password)) {
            setErrorMsg(
                "영문, 숫자, 특수문자(() < > \" ' ; 제외)중 2종류를 조합하여 10~16자리 (3종류는 8~16자리)로 구성할 수 있습니다."
            );
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsg("Password does not match the confirmation password.");
            return;
        }

        setErrorMsg(""); // 비밀번호가 유효하면 오류 메시지를 지움
        console.log("success"); // 비밀번호가 규칙에 맞으면 success를 콘솔에 출력
        // 비밀번호가 규칙에 맞으면 회원가입 로직을 실행
    };

    return (
        <div>
            <HeaderBanner3 />
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Join</h1>
                            <h6 className="subtitle">
                                Here you can check Demos we created based on
                                WrapKit. Its quite easy to Create your own dream
                                website &amp; dashboard in No-time.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container style={{ paddingBottom: "100px" }}>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">User Name</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Username"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Ex) a000000@aivle.kt.co.kr"
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {errorMsg && (
                                    <div style={{ color: "red" }}>
                                        {errorMsg}
                                    </div>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="confirmpwd">
                                    Confirm Password
                                </Label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    id="confirmpwd"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                                {confirmPassword !== password && (
                                    <div style={{ color: "red" }}>
                                        Password does not match
                                    </div>
                                )}
                            </FormGroup>
                            <div className="text-center">
                                <FormGroup>
                                    <Input id="checkbox1" type="checkbox" />
                                    <Label htmlFor="checkbox1">
                                        {" "}
                                        약관 동의{" "}
                                    </Label>
                                </FormGroup>

                                <Button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="btn btn-success waves-effect waves-light m-r-10"
                                >
                                    Submit
                                </Button>
                                <Button
                                    type="submit"
                                    className="btn btn-inverse waves-effect waves-light"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default SignupForm;
