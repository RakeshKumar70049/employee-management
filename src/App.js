import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Position from "./Components/Position/Position";
import Department from "./Components/Department/Department";
import  Country from "./Components/Country/Country";
import State from "./Components/State/State";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Department/>,
  },
  {
    path: "/Position",
    element: <Position/>
  },
  {
  path:  "/Country",
  element:  <Country/> 
  },
  {
  path: "state",
  element: <State/>
}
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


 export default App;
