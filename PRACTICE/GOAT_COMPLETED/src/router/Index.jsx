import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Calculation from '../pages/Calculation'
import Cart from '../pages/Cart'
export const RootRouter = () => {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/calculation" element={<Calculation />} />
        </Routes>
    )
}
