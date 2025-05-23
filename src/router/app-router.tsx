import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { Suspense } from "react";
import SignUp from "../person/sign-up";
import Login from "../person/login";
import Home from "../person/home";
import UpdateUser from "../person/update-user";


const AppRouter = () => {
    return <>
        <Suspense fallback={<span>Loading....</span>}>
            <Router>
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/update" element={<UpdateUser />} />
                </Routes>
            </Router>
        </Suspense>
    </>
}

export default AppRouter;