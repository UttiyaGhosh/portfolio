import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
