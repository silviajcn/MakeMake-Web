import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarOne from '../components/NavBarOne';
import Home from '../pages/Home';
import Institutos from '../pages/Institutos';
import EditData from '../pages/EditData';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <Router>

            <NavBarOne />

            <Routes>

                <Route path='/' element={ <Home /> } />

                <Route path='/institutos' element={ <Institutos /> } />

                <Route path='/edit' element={ <EditData /> } />

            </Routes>

            <Footer />

        </Router>
    )
};

export default AppRouter;