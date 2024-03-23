import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Roots from './compoents/root/Roots.jsx';
import Home from './compoents/home/Home.jsx';
import Jobs from './compoents/appliedjobs/Jobs.jsx';
import Errorpage from './compoents/Eeror/Errorpage.jsx';
import Jobdetails from './compoents/jobDetails/Jobdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<Jobs></Jobs>,
        loader: ()=> fetch('../jobs.json')
      },
      {
         path:'/job/:id',
         element:<Jobdetails></Jobdetails>,
         loader: ()=>fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
