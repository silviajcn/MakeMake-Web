import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon, SubTitles, ContainerLinks, LinksMenu, ImgLogo, InputSearch, BtnSearch, IconImg, LogoImgMake } from "../styles/NavBarTwo.elements";
import '../styles/index.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBarTwo = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container className='font-one'>
            <Wrapper>

                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes />  : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles>¿Qué es MakeMake?</SubTitles>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles>Planes MakeMake</SubTitles>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles>Catálogo MakeMake</SubTitles>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles>Contacto</SubTitles>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <Link to="/" className="links">
                                        <LogoImgMake src="https://res.cloudinary.com/silviajcn/image/upload/v1644873991/Pruebas%20Tecnicas/MakeMake/PaginaWeb/Logo/logo-makemake_xjypez.png" alt="logo-MakeMake" />
                                    </Link>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                    </Menu>
                </IconContext.Provider>

                <ContainerLinks>
                    <InputSearch
                    id="search"
                    name="search"
                    type="text"
                    aria-label="Search Products"
                    placeholder="Búsqueda por título, autor, editorial"
                    />
                    <BtnSearch
                    type="submit"
                    >
                    <IconImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644892822/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/lupa_wnf8iz.svg" alt="search" />
                    </BtnSearch>
                </ContainerLinks>

                <ContainerLinks>
                    <Link to="/" className="links">
                        <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1644873991/Pruebas%20Tecnicas/MakeMake/PaginaWeb/Logo/logo-makemake_xjypez.png" alt="logo" />
                    </Link>
                </ContainerLinks>

                <ContainerLinks>
                    <LinksMenu>¿Qué es?</LinksMenu>

                    <LinksMenu>Quiero MakeMake</LinksMenu>

                    <LinksMenu>Blog</LinksMenu>
                        
                    <LinksMenu>Iniciar sesión</LinksMenu>

                </ContainerLinks>

            </Wrapper>
        </Container>
    )
}

export default NavBarTwo