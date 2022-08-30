import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import allRoutes from './allRoutes';
function Direct() {
  return (
    <>
        <BrowserRouter>
        {allRoutes.map((route)=>{
            return(
            <Routes key={route.id}>
                <Route path={route.path} element={route.component} />
            </Routes>
            )
        })}
            
        </BrowserRouter>
    </>
  )
}

export default Direct;