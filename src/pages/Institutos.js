import React from 'react';
import Cards from '../components/Cards.js';
import {
    FirtsContainer,
    ContainerOne,
    ContainerOneItems,
    ContainerOneIcon,
    ContainerTwo,
    ContainerTwoP,
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
                <p>Institutos</p>

                <ContainerOneItems>
                    <ContainerOneIcon>
                        <FaChevronRight />
                    </ContainerOneIcon>
                    
                    <span><strong>Todos los intitutos</strong></span>
                </ContainerOneItems>
            </ContainerOne>

            <ContainerTwo>
                <h1>Tus institutos (Sedes)</h1>

                <ContainerTwoP>3/5 sedes asginadas</ContainerTwoP>
            </ContainerTwo>

            <ContainerThree>
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