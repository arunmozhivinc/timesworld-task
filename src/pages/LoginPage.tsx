import React, { FC, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './custom.css';
import loginImg from '../assets/121.png';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center p-0">
      <Row className="w-100 m-0">
        <LoginForm />
        {/* Right: Image Section */}
        <Col
          md={5}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <img
            src={loginImg}
            alt="Illustration"
            className="img-fluid"
            style={{
              width: '350px',
              height: '600px',
              position: 'relative', // or 'absolute' if you want it to be removed from the flow
              objectFit: 'contain'
            }}
          />

        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;