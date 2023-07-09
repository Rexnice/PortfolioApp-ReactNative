import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from './components/Footer';
import Profile from "./pages/Profile";
import Whatido from "./components/Whatido";
import Project from "./components/Project";
import Connect from "./components/Connect";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () =>{
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Profile",
        element: <Profile />
      },
      {
        path: "/Whatido",
        element: <Whatido />
      },
      {
        path: "/Project",
        element: <Project />
      },
      {
        path: "/Connect",
        element: <Connect />
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />    
    </div>
  );
};

export default App;
