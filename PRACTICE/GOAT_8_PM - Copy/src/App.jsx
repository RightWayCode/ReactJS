import React from "react";
import router from "./router";
// import { Header } from "./component/Header";
import { BrowserRouter, RouterProvider } from "react-router";


const App = () => {
  return (<RouterProvider router={router} />);
};

export default App;
