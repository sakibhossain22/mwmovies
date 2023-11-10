import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import ErrorElement from './components/ErrorElement';
import Home from './components/Home.jsx';
import MovieDetails from './MovieDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/movie/:uniqueName',
        element : <MovieDetails></MovieDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
