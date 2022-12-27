import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";

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
            },
        ],
        errorElement: <NotFound />,
    }
]);

export default router;
