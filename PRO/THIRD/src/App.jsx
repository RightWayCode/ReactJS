import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Task from "./pages/task"
import Layout from "./component/Layout"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"your-task",
        element: <Task/>
      }
    ]
  }
]);

function App() {


  return <RouterProvider router={router}/>
}

export default App
