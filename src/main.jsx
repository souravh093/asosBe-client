import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import Provider from './Provider/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider><RouterProvider router={router} /></Provider>
)
