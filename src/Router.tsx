import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";

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
            }
        ],
        errorElement: <NotFound />,
    }
]);

export default router;
