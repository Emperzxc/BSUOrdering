import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './pages/App.jsx'
import LoginPage from './pages/LoginPage.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <div>Error 404 not found</div>
  },{
    path:'/LoginPage',
    element: <LoginPage/>,
    errorElement: <div>Error 404 not found</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
