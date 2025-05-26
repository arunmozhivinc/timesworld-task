import React, { FC, useEffect, useState } from "react";
import axios from "axios";
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
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import Slider from "../components/Slider";

const FiYoutubeComponent = FiYoutube as unknown as FC;
const FaLinkedinFComponent = FiLinkedin as unknown as FC;
const FaTwitterComponent = FiTwitter as unknown as FC;
const FiFacebookComponent = FiFacebook as unknown as FC;

interface Country {
  name: string;
  region: string;
  flag: string;
}

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [visible, setVisible] = useState(12);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const filteredCountries = selectedRegion === "All"
    ? countries
    : countries.filter((country) => country.region === selectedRegion);


  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => setCountries(res.data));
  }, []);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 12);
  };

  return (
    <><Navbar expand="md" className="py-3">
      <Container>
        <Navbar.Brand>Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              active={selectedRegion === "All"}
              onClick={() => setSelectedRegion("All")}
              className="nav-link-custom"
            >
              All
            </Nav.Link>
            <Nav.Link
              active={selectedRegion === "Asia"}
              onClick={() => setSelectedRegion("Asia")}
              className="nav-link-custom"
            >
              Asia
            </Nav.Link>
            <Nav.Link
              active={selectedRegion === "Europe"}
              onClick={() => setSelectedRegion("Europe")}
              className="nav-link-custom"
            >
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container className="mt-4">
        <Row className="align-items-center text-center">
          <Col xs={12} md={5} className="d-flex justify-content-center">
            <div className="welcome-line mb-3"></div>
          </Col>
          <Col xs={12} md={2}>
            <h2 className="fw-bold welcome-text my-3 my-md-0">WELCOME</h2>
          </Col>
          <Col xs={12} md={5} className="d-flex justify-content-center">
            <div className="welcome-line mt-4"></div>
          </Col>
        </Row>
      </Container>
      

      <Container className="mt-4">
        <Row >
          <Col xs={12} md={4} className="order-1 order-md-2 mt-3 mt-md-0">
            <Card className="h-100 custom-border">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <span>Feature</span>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} className="order-2 order-md-1">
            {/* <Carousel className="custom-border">
              <Carousel.Item>
                <div
                  className="bg-light d-flex justify-content-center align-items-center"
                  style={{ height: '494px', width: '100%' }}
                >
                  <span>Image 1</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="bg-light d-flex justify-content-center align-items-center"
                  style={{ height: '494px', width: '100%' }}
                >
                  <span>Image 2</span>
                </div>
              </Carousel.Item>
            </Carousel> */}
            <Slider />
          </Col>
        </Row>

      </Container>


      <Container className="my-4">
        <Row xs={1} sm={2} md={2} lg={2} xl={2} className="g-3">
          {filteredCountries.slice(0, visible).map((country, idx) => (
            <Col key={idx}>
              <Card className="custom-border">
                <Row className="g-0 align-items-center">
                  <Col xs={3}>
                    <Card.Img variant="top" src={country.flag} height={100} width={100} />

                  </Col>
                  <Col xs={9}>
                    <Card.Body>
                      <Card.Title>{country.name}</Card.Title>
                      <Card.Text>{country.region}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>


        {visible < countries.length && (
          <div className="text-center">
            <Button variant="dark" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </Container>
      <footer className="bg-white text-center py-4">

        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button
            variant="outline-dark"
            className="d-flex justify-content-center align-items-center rounded-circle p-0"
            style={{ width: "48px", height: "48px" }}
          >
            <FiFacebookComponent />
          </Button>
          <Button
            variant="outline-dark"
            className="d-flex justify-content-center align-items-center rounded-circle p-0"
            style={{ width: "48px", height: "48px" }}
          >
            <FaTwitterComponent />
          </Button>
          <Button
            variant="outline-dark"
            className="d-flex justify-content-center align-items-center rounded-circle p-0"
            style={{ width: "48px", height: "48px" }}
          >
            <FaLinkedinFComponent />
          </Button>
          <Button
            variant="outline-dark"
            className="d-flex justify-content-center align-items-center rounded-circle p-0"
            style={{ width: "48px", height: "48px" }}
          >
            <FiYoutubeComponent />
          </Button>

        </div>
        <div className="small mt-5">Example@domain.com</div>
        <div className="text-muted small mt-3">
          Copyright © 2025 Name. All rights reserved.
        </div>
      </footer></>
  );
}

export default HomePage;