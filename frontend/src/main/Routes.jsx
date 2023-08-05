import React from 'react'

import { Routes, Route } from "react-router-dom"

import UsersCrud from '../components/user/UserCrud'
import Home from '../components/home/Home'

export default props =>  
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UsersCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>