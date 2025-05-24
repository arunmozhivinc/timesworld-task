import React, { FC } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Navbar,
  Nav,
  Carousel,
} from "react-bootstrap";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

const FaGlobeComponent = FaGlobe as unknown as FC;
const FaLinkedinFComponent = FaLinkedin as unknown as FC;
const FaInstagramComponent = FaInstagram as unknown as FC;
const FaTwitterComponent = FaTwitter as unknown as FC;

const CountriesPage: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="md" className="py-3 border-bottom">
        <Container>
          <Navbar.Brand>Countries</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link active>All</Nav.Link>
              <Nav.Link>Asia</Nav.Link>
              <Nav.Link>Europe</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Title */}
      <Container className="text-center mt-4">
        <h2 className="fw-bold border-bottom pb-2 d-inline-block">WELCOME</h2>
      </Container>

      {/* Hero Section */}
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <Carousel>
              <Carousel.Item>
                <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: 200 }}>
                  <span>Image 1</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: 200 }}>
                  <span>Image 2</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4} className="mt-3 mt-md-0">
            <Card className="h-100">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <span>Feature</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Country Cards */}
      <Container className="my-4">
        <Row xs={1} sm={2} md={2} lg={2} xl={2} className="g-3">
          {[...Array(10)].map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Row className="g-0 align-items-center">
                  <Col xs={3}>
                    <div className="bg-secondary" style={{ height: "100%", width: "100%", minHeight: "60px" }}></div>
                  </Col>
                  <Col xs={9}>
                    <Card.Body>
                      <Card.Title className="mb-1">Afghanistan</Card.Title>
                      <Card.Text className="text-muted small">Asia</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="dark">Load more</Button>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-white text-center border-top py-4">
        <div className="mb-2">
          <FaTwitterComponent />
          <FaInstagramComponent  />
          <FaLinkedinFComponent />
          <FaGlobeComponent  /> 
        </div>
        <div className="small">Example@domain.com</div>
        <div className="text-muted small">
          Copyright © 2025 Name. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default CountriesPage;
