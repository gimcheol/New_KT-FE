import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">NEW KT</h1>
                        <h4 className="subtitle font-light">무슨 내용을 쓸까 <br /> 한글폰트도 가져와야겠다</h4>
                
                        <Link to="/#coming" className="btn btn-outline-primary m-t-30 font-18">회의 시작</Link>
                        {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-16">회의 시작</Link> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
