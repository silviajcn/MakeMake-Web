import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { showDetailInstitutoAsync, updateInstitutoAsync, updateInstitutoSync, deleteInstitutosAsync } from '../redux/actions/actionInstitutos';
import { Link, useNavigate } from "react-router-dom";
import {
    FirtsContainer,
    ContainerOne,
    ContainerOneItems,
    ContainerOneIcon,
    ContainerOneInfo,
    ContainerTwo,
    ContainerThree,
    ContainerBase,
    ContainerBaseTwo,
    ContainerBaseTitle,
    Span,
    Input,
    BtnEdit,
    ContainerColors,
    Color,
    ContainerActions,
    BtnDelete,
    IconDelete,
    DeleteP,
    BtnUpdate,
} from '../styles/Edit.elements.js';
import { FaChevronRight } from "react-icons/fa";
import { Form } from 'react-bootstrap';

const EditData = () => {

    let history = useNavigate();

    // Show Detail Institute
    const dispatch = useDispatch();

    const { institutes } = useSelector((store) => store.institutes);
    //console.log(institutes);

    useEffect(() => {
        dispatch(showDetailInstitutoAsync())
    }, []);

    // Form update Institute
    const [ values, handleInputChange, reset, setValues ] = useForm({
        nombre: '',
        telefono: '',
        correo: '',
        color: '',
    })

    const {
        nombre,
        telefono,
        correo,
        // color,
    } = values

    const [ updateForm, setUptateForm ] = useState(false)

    const handleUpdate = (institutes) => {
        dispatch(updateInstitutoSync(institutes.sede, institutes))
        setUptateForm(true)
        setValues({
            ...institutes
        })
    }

    const handlePut = (e) => {
        e.preventDefault()
        dispatch(updateInstitutoAsync(values))
        console.log(values)
        reset()
        setUptateForm(false)
    }

    // Colors
    // const [colors, setColors] = useState();
    // const changeColor = (element) => {
    //     setColors(element)
    // }

    return (
        <FirtsContainer>
            <ContainerOne>
                <Link to="/institutos" className="links">
                    <p>Todos los institutos</p>
                </Link>

                <ContainerOneItems>
                    <ContainerOneIcon>
                        <FaChevronRight />
                    </ContainerOneIcon>
                    
                    <ContainerOneInfo>Editar instituto</ContainerOneInfo>
                </ContainerOneItems>
            </ContainerOne>

            <ContainerTwo>
                <h1>Editar sede</h1>
            </ContainerTwo>

            
            <ContainerThree>

            {institutes.map((e,i) => (
                <div key={i}>

                <Form>
                <Form.Group>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle>Nombre<Span>*</Span></ContainerBaseTitle>
                    </ContainerBaseTwo>

                    <Input
                        type="text"
                        name="nombre"
                        placeholder={e.nombre}
                        value={nombre}
                        onChange={handleInputChange}
                    />

                    <BtnEdit
                        type="button"
                        value="update"
                        onClick={() => handleUpdate(e)}
                    >
                        Editar
                    </BtnEdit>
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle>Teléfono de contacto</ContainerBaseTitle>
                        <p>El número que ingreses correponde al número de contacto donde tus usuarios podrán llamar si es necesario</p>
                    </ContainerBaseTwo>

                    <Input
                        type="text"
                        name="telefono"
                        placeholder={e.telefono}
                        value={telefono}
                        onChange={handleInputChange}
                    />

                    <BtnEdit
                        type="button"
                        value="update"
                        onClick={() => handleUpdate(e.sede)}
                    >
                        Editar
                    </BtnEdit>
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle>Correo de contacto</ContainerBaseTitle>
                        <p>El correo que ingreses correponde al correo de contacto donde tus usuarios podrán escribir si es necesario</p>
                    </ContainerBaseTwo>

                    <Input
                        type="text"
                        name="correo"
                        placeholder={e.correo}
                        value={correo}
                        onChange={handleInputChange}
                    />

                    <BtnEdit
                        type="button"
                        value="update"
                        onClick={() => handleUpdate(e.sede)}
                    >
                        Editar
                    </BtnEdit>
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle>Paquete asignado<Span>*</Span></ContainerBaseTitle>
                        <p>Ya no se puede cambiar</p>
                    </ContainerBaseTwo>

                    <Input
                        placeholder={e.paqueteAsignado}
                    />

                    <div></div>
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle>Color del instituto (opcional)</ContainerBaseTitle>
                        <p>Esta imagen será usada para mostrar el instituto en búsquedas y en su página de inicio</p>
                    </ContainerBaseTwo>

                    <ContainerColors>
                        <div style={{background: "#99D438"}}>
                            <Color></Color>
                        </div>

                        <div style={{background: "#FFD100"}}>
                            <Color></Color>
                        </div>

                        <div style={{background: "#2990F0"}}>
                            <Color></Color>
                        </div>

                        <div style={{background: "#6680E3"}}>
                            <Color></Color>
                        </div>

                        <div style={{background: "#FF3548"}}>
                            <Color></Color>
                        </div>
                        
                        <div style={{background: "#FFBB62"}}>
                            <Color></Color>
                        </div>
                    </ContainerColors>
                </ContainerBase>

                <ContainerActions>
                    <BtnDelete>
                        <IconDelete src="https://res.cloudinary.com/silviajcn/image/upload/v1644940836/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/basura_tph30k.svg" alt="icon" />
                        <DeleteP
                            type="button"
                            value="delete"
                            onClick={() => dispatch(deleteInstitutosAsync(e.sede))}
                        >
                            Eliminar sede
                        </DeleteP>
                    </BtnDelete>
                    
                    {
                        !updateForm
                            ?
                            <></>
                            :
                            <Link to="/" className="links">
                            <BtnUpdate
                                // type="submit"
                                onClick={handlePut}
                            >
                                Actualizar
                            </BtnUpdate>
                            </Link>
                    }

                    
                </ContainerActions>

                </Form.Group>
                </Form>
                </div>
            ))}
            </ContainerThree>
        </FirtsContainer>
    )
};

export default EditData;