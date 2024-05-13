import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './routes/Home.jsx';
import SinglePage from './routes/SinglePage.jsx';
import Profile from './routes/Profile.jsx';
import ListPage from './routes/ListPage.jsx';
import Layout from './routes/Layout.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/list",
        element:<ListPage/>
      },
      {
        path:"list/:id",
        element:<SinglePage/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
