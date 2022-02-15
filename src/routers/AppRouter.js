import React from 'react';
import NavBarOne from '../components/NavBarOne';
import Institutos from '../pages/Institutos';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <div>
            <NavBarOne />
            
            <Institutos />

            <Footer />
        </div>
    )
};

export default AppRouter;