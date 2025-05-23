import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import AuthApiService from "../data/auth/auth-api-service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const SignUp = () => {
    const authService = new AuthApiService();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate();


    const goBack = () => {
        navigate('/home');

    }
    const doSignup = async (e: any) => {
        e.preventDefault();
        if (!userName) {
            toast.error("Please Enter User Name", { containerId: 'TR' });
            return;
        }
        if (!fullName) {
            toast.error("Please Enter Full Name", { containerId: 'TR' });
            return;
        }
        if (!password) {
            toast.error("Please Enter password", { containerId: 'TR' });
            return;
        }
        await executeLoginApi();
    }

    const executeLoginApi = async () => {
        try {
            let payload: any = { email: userName, password: password, fullName: fullName };
            await authService.doSignUp(payload);
            toast.success('Successfully Sign Up', { containerId: 'TR' });
            navigate('/home');
        } catch (error: any) {
            console.log(" Login Failed", error);
            toast.error(error.message, { containerId: 'TR' });
        }
    }

    function recursiveItemIterator(items:any) {
        for (const item of items) {
          // Process the item
          console.log(item.name);
      
          // Check if the item has sub-items
          if (item.subItems && item.subItems.length > 0) {
            // Recursively call the function on the sub-items
            recursiveItemIterator(item.subItems);
          }
        }
      }
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Card className="w-100">
                    <Row className="justify-content-center">
                        <Form className="w-75">
                            <Form.Text>
                                <div className="text-center">
                                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>
                                        Sign Up
                                    </span>
                                </div>
                            </Form.Text>
                            <Form.Group className="mt-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={fullName}
                                    onChange={e => { setFullName(e.target.value) }}
                                    placeholder="Enter full name"
                                />
                            </Form.Group>
                            <Form.Group className="mt-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={userName}
                                    onChange={e => { setUserName(e.target.value) }}
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                    placeholder="Password"
                                />
                            </Form.Group>


                            <Button className="mt-3" variant="dark" onClick={goBack}>
                                Cancel
                            </Button> &nbsp;
                            <Button className="mt-3" variant="primary" onClick={doSignup} type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Row>
                </Card>
            </Row>
        </Container>

    );

}
export default SignUp;