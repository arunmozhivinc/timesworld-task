import React, { FC, useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './custom.css';
import loginImg from '../assets/illustration.png';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// Type assertions for react-icons components to avoid TS2786
const FaGoogleComponent = FaGoogle as unknown as FC;
const FaFacebookFComponent = FaFacebookF as unknown as FC;
const FaLinkedinInComponent = FaLinkedinIn as unknown as FC;
const FaTwitterComponent = FaTwitter as unknown as FC;

// Define form input types
interface LoginForm {
  email: string;
  password: string;
  keepSignedIn: boolean;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    keepSignedIn: false,
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const validate = (): Partial<LoginForm> => {
    const newErrors: Partial<LoginForm> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)
    ) {
      newErrors.password = 'Min 8 chars, 1 capital, 1 number, 1 special char';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
      navigate('/home');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginForm,
  ) => {
    const value = field === 'keepSignedIn' ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    const validationErrors = validate();
    setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
  };

  return (
    <Container  className="vh-100 d-flex align-items-center justify-content-center p-0">
      <Row className="w-100 m-0">
    <Col
        xs={12}
        md={{ span: 5, offset: 2 }}
        className="d-flex flex-column justify-content-center px-5 py-4"
      >
          <h2 className="fw-bold mb-3">Sign In</h2>
          <p className="mb-4">
            New user?{' '}
            <a href="/signup" className="text-primary">
              Create an account
            </a>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
               onBlur={(e: any) => {
                    handleChange(e, 'email');
                  }}
               autoComplete="email"
                placeholder="Username or email"
                className="custom-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e:any) => handleChange(e, 'email')}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                onBlur={(e: any) => {
                      handleChange(e, 'password');
                    }}
                placeholder="Password"
                className="custom-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={(e:any) => handleChange(e, 'password')}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4 d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={formData.keepSignedIn}
                onChange={(e) => handleChange(e, 'keepSignedIn')}
              />
              <label className="form-check-label mb-0 mx-2">Keep me signed in</label>
            </Form.Group>


            <Button variant="dark" className="mb-4 custom-input" type="submit">
              Sign In
            </Button>

            <div className="text-center my-3 d-flex align-items-center custom-input1">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or Sign In With</span>
              <hr className="flex-grow-1" />
            </div>

            <div className="d-flex justify-content-center gap-3 custom-input1">
              <Button variant="outline-dark" className="rounded-circle p-3 social-button">
                <FaGoogleComponent />
              </Button>
              <Button variant="outline-dark" className="rounded-circle p-3 social-button">
                <FaFacebookFComponent />
              </Button>
              <Button variant="outline-dark" className="rounded-circle p-3 social-button">
                <FaLinkedinInComponent />
              </Button>
              <Button variant="outline-dark" className="rounded-circle p-3 social-button">
                <FaTwitterComponent />
              </Button>
            </div>
          </Form>
        </Col>

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
    width: '300.4863586425781px',
    height: '509.73944091796875px',
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