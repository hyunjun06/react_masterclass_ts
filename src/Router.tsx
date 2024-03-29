import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <NotFound />, // error when children occurs runtime error
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "users/:userid",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    }
                ]
            },
        ],
        errorElement: <NotFound />,
    }
]);

export default router;
