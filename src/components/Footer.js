import React from 'react';
import {
    FirtsContainer,
    SecondContainer,
    LogoImg,
} from '../styles/Footer.elements';
import {
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
 } from "react-icons/fa";

const Footer = () => {
    return (
        <FirtsContainer>

            <SecondContainer>
                <div>
                    <div>
                        <div>
                            <LogoImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644873991/Pruebas%20Tecnicas/MakeMake/PaginaWeb/Logo/logo-makemake_xjypez.png" alt="logo-MakeMake" />
                        </div>

                        <div>
                            <p>Es un producto de:</p>
                            <LogoImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644905448/Pruebas%20Tecnicas/MakeMake/PaginaWeb/Logo/logo-makina_rywfwy.png" alt="logo-MainaEditorial" />
                        </div>
                    </div>

                    <div>
                        <p>COLOMBIA</p>
                        <p>CHILE</p>
                        <p>ECUADOR</p>
                        <p>ESTADOS UNIDOS</p>
                        <p>MÉXICO</p>
                    </div>
                </div>

                <div>
                    <p>Para información comercial contactar a:</p>
                    <p>contacto@makemake.com.co</p>
                    <p>(57) 350 236 7037</p>
                    <p>(57) 350 201 1041, (57) 313 450 9992</p>
                    <p>Cra 13 No. 33-74. Bogotá, Colombia</p>

                    <div>
                        <FaFacebookSquare />

                        <FaInstagram />

                        <FaYoutube />
                    </div>
                </div>

                <div>
                    <p>Suscríbete a nuestro boletín para recibir recomendaciones de lectura y actividades de nuestros libros.</p>

                    <div>
                        <input />
                    </div>
                </div>
            </SecondContainer>

            <div>
                <p>MakeMake Clone By Silvi. Todos los derechos reservados.</p>
            </div>
            
        </FirtsContainer>
    )
};

export default Footer;