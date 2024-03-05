import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './NotFound.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Docs from './Docs.jsx'
import Downloads from './Downloads.jsx'

document.title = "Morch Client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
  {
    path: "docs",
    element: <Docs/>
  },
  {
    path: "downloads",
    element: <Downloads/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
