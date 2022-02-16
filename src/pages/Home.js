import React from 'react';
import { Link } from "react-router-dom";
import { FirtsContainer, ContainerItems, ContainerImg, Text } from "../styles/Home.elements";

const Home = () => {
    return (
        <FirtsContainer>
            <ContainerItems>

            <Link to="/institutos" className="links">
                <ContainerImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644964604/Pruebas%20Tecnicas/MakeMake/PaginaWeb/images/plan_itotvr.png" alt="plan-colegios" />
                <Text className='font-two'>Ingresar a Institutos</Text>
            </Link>
            
            </ContainerItems>
        </FirtsContainer>
    )
};

export default Home;