import React from 'react';
import Cards from '../components/Cards.js';
import { Link } from "react-router-dom";
import {
    FirtsContainer,
    ContainerOne,
    ContainerOneItems,
    ContainerOneIcon,
    ContainerOneInfo,
    ContainerTwo,
    ContainerTwoP,
    ContainerDate,
    Date,
    ContainerThree,
    ContainerThreeFilter,
    ContainerFour,
} from '../styles/Institutos.elements.js';
import { FaChevronRight } from "react-icons/fa";
import Search from '../components/Search.js';

const Institutos = () => {

    return (
        <FirtsContainer>
            <ContainerOne>
                <Link to="/" className="links">
                    <p className='font-two'>Home</p>
                </Link>

                <ContainerOneItems>
                    <ContainerOneIcon>
                        <FaChevronRight />
                    </ContainerOneIcon>
                    
                    <ContainerOneInfo className='font-one'>Todos los intitutos</ContainerOneInfo>
                </ContainerOneItems>
            </ContainerOne>

            <ContainerTwo className='font-one'>
                <h1>Tus institutos (Sedes)</h1>
                <ContainerTwoP>5/5 sedes asignadas</ContainerTwoP>
            </ContainerTwo>
            
            <ContainerDate>
                <Date>
                    <p className='font-one'>Su suscripción finaliza el 25/02/22</p>
                </Date>
            </ContainerDate>

            <ContainerThree className='font-two'>
                <ContainerThreeFilter>Filtra por instituto y podrás ver los cursos asignados.</ContainerThreeFilter>

                <div><Search /></div>
            </ContainerThree>

            <ContainerFour>
                <Cards />
            </ContainerFour>
        </FirtsContainer>
    )
};

export default Institutos;