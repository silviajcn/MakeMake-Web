import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { listInstitutosAsync, showDetailInstitutoAsync } from '../redux/actions/actionInstitutos';
import {
    FirtsContainer,
    ContainerCards,
    ContainerTitle,
    ContainerData,
    ContainerItemsData,
    ItemsData,
    IconsImg,
    Data,
    SeeEdit,
    ContainerActions,
    ContainerStatistics,
    Statistics,
    ContainerButton,
    Button,
    ContainerAddCard,
    IconAdd,
    PAdd,
} from '../styles/Cards.elements';

const Cards = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { institutes } = useSelector((store) => store.institutes);
    //console.log(institutes);

    useEffect(() => {
        dispatch(listInstitutosAsync());
    }, []);

    return (
        <FirtsContainer className='font-one'>
            {
                institutes.map((e, i) => (
                    <ContainerCards key={i}>
                        <div style={{background: e.color}}>
                            <ContainerTitle>
                                <h2>{e.nombre}</h2>
                            </ContainerTitle>
                        </div>

                        <ContainerData>
                            <ContainerItemsData>
                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873857/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/birrete_ttv3qb.svg" alt="logo" />
                                    <p>{e.cursos.length} cursos</p>
                                </Data>
                                <SeeEdit>
                                    Ver todos
                                </SeeEdit>
                            </ItemsData>

                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873911/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/usuario_w4vtdl.svg" alt="logo" />
                                        <p>{e.estudiantes.length} estudiantes</p>
                                </Data>
                                <SeeEdit
                                    onClick={() => {
                                        dispatch(showDetailInstitutoAsync(e.sede))
                                        history("/edit")
                                    }}
                                >
                                    Ver/Editar
                                </SeeEdit>
                            </ItemsData>

                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873877/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/libro_ncxwa2.svg" alt="logo" />
                                    <p>{e.librosAsignados} libros asignados</p>
                                </Data>
                                <SeeEdit
                                    onClick={() => {
                                        dispatch(showDetailInstitutoAsync(e.sede))
                                        history("/edit")
                                    }}
                                >
                                    Ver/Editar
                                </SeeEdit>
                            </ItemsData>

                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873868/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/carita-redonda_yy2wcn.svg" alt="logo" />
                                    <p>{e.profesores} profesores</p>
                                </Data>
                                <SeeEdit
                                    onClick={() => {
                                        dispatch(showDetailInstitutoAsync(e.sede))
                                        history("/edit")
                                    }}
                                >
                                    Ver/Editar
                                </SeeEdit>
                            </ItemsData>
                            </ContainerItemsData>

                            <ContainerActions>
                                <ContainerStatistics>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644890736/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/estadisticas_wbnjlg.svg" alt="logo" />
                                    <Statistics>Ver estadísticas</Statistics>
                                </ContainerStatistics>

                                <ContainerButton>
                                    <Button
                                        className='font-one'    
                                        onClick={() => {
                                            dispatch(showDetailInstitutoAsync(e.sede))
                                            history("/edit")
                                        }}
                                    >
                                    Editar sede
                                    </Button>
                                </ContainerButton>
                            </ContainerActions>
                        </ContainerData>
                    </ContainerCards>
                ))
            }

            <ContainerAddCard>
                <IconAdd src="https://res.cloudinary.com/silviajcn/image/upload/v1644873901/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/mas_wcfdnb.svg" alt="logo" />
                <PAdd>Agregar Sede</PAdd>
            </ContainerAddCard>
        </FirtsContainer>
    )
};

export default Cards;