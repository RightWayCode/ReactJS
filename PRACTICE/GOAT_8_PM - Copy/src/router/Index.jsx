import { createBrowserRouter } from "react-router";
import { LayOut } from "../component/LayOut";
import Calculation from '../pages/Calculation'
import Cart from '../pages/Cart'
export default createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                index: true,
                element: <Calculation />
            },
            {
                path:"/calculation",
                element:<Calculation/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])