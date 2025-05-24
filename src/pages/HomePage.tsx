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
    <><Navbar expand="md" className="py-3 border-bottom">
      <Container>
        <Navbar.Brand>Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link active={selectedRegion === "All"} onClick={() => setSelectedRegion("All")}>
              All
            </Nav.Link>
            <Nav.Link active={selectedRegion === "Asia"} onClick={() => setSelectedRegion("Asia")}>
              Asia
            </Nav.Link>
            <Nav.Link active={selectedRegion === "Europe"} onClick={() => setSelectedRegion("Europe")}>
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar><Container className="text-center mt-4">
        <h2 className="fw-bold border-bottom pb-2 d-inline-block">WELCOME</h2>
      </Container><Container className="mt-4">
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
      </Container><Container className="my-4">
        <Row xs={1} sm={2} md={2} lg={2} xl={2} className="g-3">
          {filteredCountries.slice(0, visible).map((country, idx) => (
            <Col key={idx}>
              <Card>
                <Row className="g-0 align-items-center">
                  <Col xs={3}>
                    {/* <div className="bg-secondary" style={{ height: "100%", width: "100%", minHeight: "60px" }}></div> */}
                    <Card.Img variant="top" src={country.flag} height={100} width={100} />

                  </Col>
                  <Col xs={9}>
                    <Card.Body>
                      <Card.Title>{country.name}</Card.Title>
                      <Card.Text>{country.region}</Card.Text>
                    </Card.Body>
                    {/* <Card.Body>
              <Card.Title className="mb-1">Afghanistan</Card.Title>
              <Card.Text className="text-muted small">Asia</Card.Text>
            </Card.Body> */}
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
      </Container><footer className="bg-white text-center border-top py-4">
        <div className="mb-2">
          <FaTwitterComponent />
          <FaInstagramComponent />
          <FaLinkedinFComponent />
          <FaGlobeComponent />
        </div>
        <div className="small">Example@domain.com</div>
        <div className="text-muted small">
          Copyright © 2025 Name. All rights reserved.
        </div>
      </footer></>
  );
}

export default HomePage;