import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './views/Home/Home'
import Film from './views/Film/Film'
import AddFilm from './views/AddFilm/AddFilm';
import EditFilm from './views/EditFilm/EditFilm';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/add-film',
    element:<AddFilm/>
  },
  {
    path:'/film/:title',
    element:<Film/>
  },
  {
    path:'/film/edit/:title',
    element:<EditFilm/>
  }
])
root.render(
   <RouterProvider router={router}/>
);


