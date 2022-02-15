import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listInstitutosAsync } from '../redux/actions/actionInstitutos';
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
    ContainerButton,
    Button,
    ContainerAddCard,
    IconAdd,
    PAdd,
} from '../styles/Cards.elements';

const Cards = () => {

    const dispatch = useDispatch();

    const { institutes } = useSelector((store) => store.institutes);
    //console.log(institutes);

    useEffect(() => {
        dispatch(listInstitutosAsync());
    }, []);

    return (
        <FirtsContainer>
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
                                <SeeEdit>Ver todos</SeeEdit>
                            </ItemsData>

                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873911/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/usuario_w4vtdl.svg" alt="logo" />
                                        <p>{e.estudiantes.length} estudiantes</p>
                                </Data>
                                <SeeEdit>Ver/Editar</SeeEdit>
                            </ItemsData>

                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873877/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/libro_ncxwa2.svg" alt="logo" />
                                    <p>{e.librosAsignados} libros asignados</p>
                                </Data>
                                <SeeEdit>Ver/Editar</SeeEdit>
                            </ItemsData>

                            <ItemsData>
                                <Data>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873868/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/carita-redonda_yy2wcn.svg" alt="logo" />
                                    <p>{e.profesores} profesores</p>
                                </Data>
                                <SeeEdit>Ver/Editar</SeeEdit>
                            </ItemsData>
                            </ContainerItemsData>

                            <ContainerActions>
                                <ContainerStatistics>
                                    <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644890736/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/estadisticas_wbnjlg.svg" alt="logo" />
                                    <SeeEdit>Ver estadísticas</SeeEdit>
                                </ContainerStatistics>

                                <ContainerButton>
                                    <Button id={e.correo}><strong>Editar sede</strong></Button>
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


// {/* <ContainerCards>
//                 <ContainerTitle>
//                     <div>
//                         <h2>Title</h2>
//                     </div>
//                 </ContainerTitle>

//                 <ContainerData>

//                     <ContainerItemsData>
//                         <ItemsData>
//                             <Data>
//                                 <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873857/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/birrete_ttv3qb.svg" alt="logo" />
//                                 <p>3 cursos</p>
//                             </Data>
//                             <SeeEdit>Ver todos</SeeEdit>
//                         </ItemsData>

//                         <ItemsData>
//                             <Data>
//                                 <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873911/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/usuario_w4vtdl.svg" alt="logo" />
//                                 <p>15 estudiantes</p>
//                             </Data>
//                             <SeeEdit>Ver/Editar</SeeEdit>
//                         </ItemsData>

//                         <ItemsData>
//                             <Data>
//                                 <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873877/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/libro_ncxwa2.svg" alt="logo" />
//                                 <p>30 libros asignados</p>
//                             </Data>
//                             <SeeEdit>Ver/Editar</SeeEdit>
//                         </ItemsData>

//                         <ItemsData>
//                             <Data>
//                                 <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873868/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/carita-redonda_yy2wcn.svg" alt="logo" />
//                                 <p>4 profesores</p>
//                             </Data>
//                             <SeeEdit>Ver/Editar</SeeEdit>
//                         </ItemsData>
//                     </ContainerItemsData>

//                     <ContainerActions>
//                         <ContainerStatistics>
//                             <IconsImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644890736/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/estadisticas_wbnjlg.svg" alt="logo" />
//                             <SeeEdit>Ver estadísticas</SeeEdit>
//                         </ContainerStatistics>

//                         <ContainerButton>
//                             <Button><strong>Editar sede</strong></Button>
//                         </ContainerButton>
//                     </ContainerActions>
//                 </ContainerData>
                
//             </ContainerCards> */}