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
import NewPost from './routes/NewPost.jsx';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders.js';
import { SocketContext, SocketContextProvider } from './context/SocketContext.jsx';


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
        element:<ListPage/>,
        loader: listPageLoader
      },
      {
        path:"list/:id",
        element:<SinglePage/>,
        loader: singlePageLoader
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
        element:<Profile/>,
        loader: profilePageLoader
      },
      {
        path:"/profile/update/:id",
        element:<Update/>
      },
      {
        path:"/profile/add",
        element:<NewPost/>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <RouterProvider router={router} />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
