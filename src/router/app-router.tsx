import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { Suspense } from "react";
import SignUp from "../person/sign-up";
import Home from "../person/home";
import UpdateUser from "../person/update-user";
import SignIn from "../person/sign-in";
import CountriesPage from "../person/country";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


const AppRouter = () => {
    return <>
        <Suspense fallback={<span>Loading....</span>}>
            <Router>
                <Routes>
                {/* <Route path="/" element={<SignIn />} />
                <Route path="/country" element={<CountriesPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/update" element={<UpdateUser />} /> */}

                 <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </Suspense>
    </>
}

export default AppRouter;