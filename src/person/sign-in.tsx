import React, { FC } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './person.css'; 
import loginImg from "../assets/illustration.png";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const FaGoogleComponent = FaGoogle as unknown as FC;
const FaFacebookFComponent = FaFacebookF as unknown as FC;
const FaLinkedinInComponent = FaLinkedinIn as unknown as FC;
const FaTwitterComponent = FaTwitter as unknown as FC;

const SignIn = () => {
  return (
    <>
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        {/* Left: Form Section */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center px-5 py-4"
        >
          <h2 className="fw-bold mb-3">Sign In</h2>
          <p>
            New user? <a href="/signup">Create an account</a>
          </p>
          <Form>
            <Form.Group className="mb-3">
             <Form.Control
                type="text"
                placeholder="Username or email"
               className="custom-input"
                />

            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" className="custom-input" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check type="checkbox" className="me-2" />
              <Form.Label className="mb-0">Keep me signed in</Form.Label>
            </Form.Group>

                <Button variant="dark" className="mb-4 custom-input">
                Sign In
                </Button>


            <div className="text-center my-3 d-flex align-items-center custom-input">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or Sign In With</span>
              <hr className="flex-grow-1" />
            </div>

            <div className="d-flex justify-content-center gap-3 custom-input">
              <Button variant="outline-dark" className="rounded-circle p-3">
                <FaGoogleComponent />
              </Button>
              <Button variant="outline-dark" className="rounded-circle p-3">
                <FaFacebookFComponent />
              </Button>
              <Button variant="outline-dark" className="rounded-circle p-3">
                <FaLinkedinInComponent />
              </Button>
              <Button variant="outline-dark" className="rounded-circle p-3">
                <FaTwitterComponent />
              </Button>
            </div>
          </Form>
        </Col>

        {/* Right: Illustration Image */}
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
            
          <img
            src={loginImg} 
            alt="Illustration"
            className="img-fluid"
            style={{ maxHeight: '80%', objectFit: 'contain' }}
          />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default SignIn;
