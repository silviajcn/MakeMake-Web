import React from 'react';
import {
    FirtsContainer,
    EmailContainer,
    PhonesContainer,
    Phones,
} from '../styles/NavBarOne.elements';

const NavBarOne = () => {
    return (
        <FirtsContainer className='font-two'>
            <EmailContainer>
                <p>contacto@makemake.com.co</p>
            </EmailContainer>

            <PhonesContainer>
                <Phones>/ +57 350 236 7037</Phones>

                <Phones>/ +57 350 201 1041</Phones>
            </PhonesContainer>
        </FirtsContainer>
    )
};

export default NavBarOne;