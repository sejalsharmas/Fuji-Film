import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './views/Home/Home'
import Film from './views/Film/Film'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path:'/film/:title',
    element:<Film/>
  }
])
root.render(
   <RouterProvider router={router}/>
);


