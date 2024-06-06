import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Result from "./Result";
import ResultGroundBall from "./ResultGroundBall";

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
            },
            {
                path: "/result/:player/:team/groundball",
                element: <ResultGroundBall />,
            }
        ],
    },
]);

export default routes;