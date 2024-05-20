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
import { Layout, RequiredLayout } from './routes/Layout.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Update from './routes/Update.jsx';

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
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
  {
    path: "/",
    element: <RequiredLayout/>,
    children:[
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/profile/update",
        element:<Update/>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
