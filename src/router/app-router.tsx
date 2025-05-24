import {
    BrowserRouter,
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { Suspense } from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


const AppRouter = () => {
    return <>
        <Suspense fallback={<span>Loading....</span>}>
                <BrowserRouter basename="/timesworld-task">
                <Routes>
                 <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                </BrowserRouter>
        </Suspense>
    </>
}

export default AppRouter;