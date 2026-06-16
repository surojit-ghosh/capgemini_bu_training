import { RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter} from "react-router-dom";
import About from './About'
import Home from './Home';
import Contact from './Contact';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Login from './Login';
import ValidateUser from './ValidateUser';
 
const r=createBrowserRouter([
     {path:'/', element:<App/>},
     {path:'/about', element:<About/>},
     {path:'/contact', element:<Contact/>},
     {path:'/home', element:<Home/>},
     {path:"/login", element:<Login/>},
     {
          path:'/dashboard',
          element:<Dashboard/>,
          children:[
               {path:'admin', element:<ValidateUser><AdminDashboard /></ValidateUser>},
               {path:'user', element:<UserDashboard/>}
          ]
     }
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
     <RouterProvider router={r} />
);