import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.auth.user);
    console.log('user', user);

    const doUpdate = () => {
        navigate('/update', { state: { id: user.id } });
    }

    return (

        <>
            <Form className=" text-center">
                <Form.Text >  <div className=" text-center mt-5">̥
                    <span style={{ fontSize: '32px', fontWeight: 'bold' }}>
                        Welcome {user?.fullName} :)
                    </span>
                </div></Form.Text>
                <Form.Label > <a href="/" >
                    logout
                </a> </Form.Label>

                
            </Form>
            <Form className=" text-center">
            <Button variant="primary" onClick={doUpdate} type="submit">
                    update
                </Button>
            </Form>
        </>
    );

}
export default Home;