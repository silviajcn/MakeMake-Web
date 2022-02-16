import React from 'react';
import { Link } from "react-router-dom";
import {
    FirtsContainer,
    ContainerTwo,
    ContainerBase,
    ContainerRow,
    LogoImgMake,
    LogoImg,
    Paises,
    Text,
    ContainerIcons,
    Links,
    ContainerBaseForm,
    ContainerForm,
    ContainerFormInput,
    ContainerFormButton,
    ContainerThree,
    Copyright,
} from '../styles/Footer.elements';
import {
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
 } from "react-icons/fa";

const Footer = () => {
    return (
        <FirtsContainer className="font-two">

            <ContainerTwo>
                <ContainerBase>
                    <ContainerRow>
                        <div>
                            <Link to="/" className="links">
                                <LogoImgMake src="https://res.cloudinary.com/silviajcn/image/upload/v1644873991/Pruebas%20Tecnicas/MakeMake/PaginaWeb/Logo/logo-makemake_xjypez.png" alt="logo-MakeMake" />
                            </Link>
                        </div>

                        <div>
                            <Text>Es un producto de:</Text>
                            <Links href="https://makinaeditorial.com/" target="_blank" rel="noreferrer">
                                <LogoImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644905448/Pruebas%20Tecnicas/MakeMake/PaginaWeb/Logo/logo-makina_rywfwy.png" alt="logo-MainaEditorial" />
                            </Links>
                        </div>
                    </ContainerRow>

                    <ContainerRow>
                        <Paises>COLOMBIA</Paises>
                        <Paises>CHILE</Paises>
                        <Paises>ECUADOR</Paises>
                        <Paises>ESTADOS UNIDOS</Paises>
                        <Paises>MÉXICO</Paises>
                    </ContainerRow>
                </ContainerBase>

                <ContainerBase>
                    <Text>Para información comercial contactar a:</Text>
                    <Text>contacto@makemake.com.co</Text>
                    <Text>(57) 350 236 7037</Text>
                    <Text>(57) 350 201 1041, (57) 313 450 9992</Text>
                    <Text>Cra 13 No. 33-74. Bogotá, Colombia</Text>

                    <ContainerIcons>
                        <Links href="https://www.facebook.com/Bookmakemake/" target="_blank" rel="noreferrer">
                            <FaFacebookSquare />
                        </Links>

                        <Links href="https://www.instagram.com/makemakelibros/" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </Links>
                        
                        <Links href="https://www.youtube.com/channel/UCAGRlTJB3fUDRfkVRPVNdzQ" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </Links>
                        
                    </ContainerIcons>
                </ContainerBase>

                <ContainerBaseForm>
                    <Text>Suscríbete a nuestro boletín para recibir recomendaciones de lectura y actividades de nuestros libros.</Text>

                    <ContainerForm>
                        <ContainerFormInput 
                            placeholder="Escribe tu email"
                        />

                        <ContainerFormButton>Subscribirse</ContainerFormButton>
                    </ContainerForm>
                </ContainerBaseForm>
            </ContainerTwo>

            <ContainerThree>
                <Copyright>MakeMake By Silvi. Todos los derechos reservados.</Copyright>
            </ContainerThree>
            
        </FirtsContainer>
    )
};

export default Footer;