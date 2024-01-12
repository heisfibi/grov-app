import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        <div className="main-screen">
            <Header />
            <div className='grow'>
                {<Outlet />}
            </div>
            <Footer />
        </div>
    )
}
