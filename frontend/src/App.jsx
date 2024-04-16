import './App.css';
import React, { useState } from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from './screens/home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={""}>
        <Route path='' element={<Home />}/>
    </Route>
  )
)

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}

export default App
