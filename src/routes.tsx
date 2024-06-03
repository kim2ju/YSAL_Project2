import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Result from "./Result";

const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/result/:player/:team",
                element: <Result />,
            }
        ],
    },
]);

export default routes;