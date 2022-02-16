import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBarOne from '../components/NavBarOne';
import NavBarTwo from '../components/NavBarTwo';
import Home from '../pages/Home';
import Institutos from '../pages/Institutos';
import EditData from '../pages/EditData';
import Footer from '../components/Footer';


const AppRouter = () => {

    return (
        <BrowserRouter>

            <NavBarOne />
            <NavBarTwo />

            <Routes>

                <Route path='/' element={ <Home /> } />

                <Route path='/institutos' element={ <Institutos /> } />

                <Route path='/edit' element={ <EditData /> } />
                
                <Route path='*' element={<Navigate to="/" />} />

            </Routes>

            <Footer />

        </BrowserRouter>
    )
};

export default AppRouter;