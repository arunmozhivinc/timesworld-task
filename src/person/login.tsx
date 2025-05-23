import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthPayload } from "../data/auth/auth-payload";
import AuthApiService from "../data/auth/auth-api-service";
import loginImg from "../assets/AdobeStock_590711715.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth-actions";


const Login = () => {
    const authService = new AuthApiService();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);

    const doLogin = async (e: any) => {
        e.preventDefault();
        if (!userName) {
            toast.error("Please Enter User Name", { containerId: 'TR' });
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
            let payload: AuthPayload = { email: userName, password: password };
            const res:any = await authService.doLogin(payload, user);
            if (res && res.data)
            dispatch(login(res.data));
            toast.success('Successfully Login', { containerId: 'TR' });
            navigate('/home');
        } catch (error: any) {
            console.log(" Login Failed", error);
            toast.error("User name or password wrong", { containerId: 'TR' });
        }
    }

    return (
        <>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Card>
                        <Row>
                            <Col md={8}>
                                <img src={loginImg} alt="login" className="login-img" />
                            </Col>
                            <Col md={4}>
                                <Form >
                                    <Form.Text >  <div className=" text-center mt-5">
                                        <span style={{ fontSize: '32px', fontWeight: 'bold' }}>
                                            Login
                                        </span>
                                    </div></Form.Text>
                                    <Form.Group className="mt-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email"
                                            value={userName} onChange={e => { setUserName(e.target.value) }}
                                            placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mt-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"
                                            value={password} onChange={e => { setPassword(e.target.value) }}
                                            placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mt-2" >
                                        <Form.Label >new user? Register <a href="/signup"  rel="noopener noreferrer">
                                            here
                                        </a> </Form.Label>
                                    </Form.Group>
                                    <Button variant="primary" onClick={doLogin} type="submit">
                                        Login
                                    </Button>
                                </Form>

                            </Col>
                        </Row>

                    </Card>

                </Row>

            </Container>
        </>
    );


}
export default Login;