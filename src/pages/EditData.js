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
    ContainerTwo,
    ContainerThree,
    ContainerBase,
    ContainerBaseTwo,
    ContainerBaseTitle,
    Span,
    ContainerEdit,
    Input,
    BtnEdit,
    ContainerColors,
    Color,
    ColorCapa,
    ContainerActions,
    BtnDelete,
    IconDelete,
    DeleteP,
    BtnUpdate,
} from '../styles/Edit.elements.js';
import { FaChevronRight } from "react-icons/fa";
import { Form } from 'react-bootstrap';

const EditData = () => {

    // Show Detail Institute
    const dispatch = useDispatch();

    const { institutes } = useSelector((store) => store.institutes);
    //console.log(institutes);

    useEffect(() => {
        dispatch(showDetailInstitutoAsync())
    }, []);

    // Form update Institute
    const { values, handleInputChange, reset, setValues
} = useForm({
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

    let history = useNavigate();

    const handlePut = (e) => {
        e.preventDefault()
        dispatch(updateInstitutoAsync(values))
        //console.log(values)
        reset()
        setUptateForm(false)
        history("/institutos")
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
                    <p className='font-two'>Todos los institutos</p>
                </Link>

                <ContainerOneItems>
                    <ContainerOneIcon>
                        <FaChevronRight />
                    </ContainerOneIcon>
                    
                    <p className='font-one'>Editar instituto</p>
                </ContainerOneItems>
            </ContainerOne>

            <ContainerTwo className='font-one'>
                <h1>Editar sede</h1>
            </ContainerTwo>

            
            <ContainerThree>

            {institutes.map((e,i) => (
                <div key={i}>

                <Form>
                <Form.Group>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle className='font-one'>Nombre<Span>*</Span></ContainerBaseTitle>
                    </ContainerBaseTwo>

                    <ContainerEdit>
                        <Input
                            type="text"
                            name="nombre"
                            placeholder={e.nombre}
                            value={nombre}
                            onChange={handleInputChange}
                        />

                        <BtnEdit
                            className='font-one'
                            type="button"
                            value="update"
                            onClick={() => handleUpdate(e)}
                        >
                            Editar
                        </BtnEdit>
                    </ContainerEdit>

                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle className='font-one'>Teléfono de contacto</ContainerBaseTitle>
                        <p className='font-two'>El número que ingreses correponde al número de contacto donde tus usuarios podrán llamar si es necesario</p>
                    </ContainerBaseTwo>

                    <ContainerEdit>
                        <Input
                            type="text"
                            name="telefono"
                            placeholder={e.telefono}
                            value={telefono}
                            onChange={handleInputChange}
                        />

                        <BtnEdit
                            className='font-one'
                            type="button"
                            value="update"
                            onClick={() => handleUpdate(e.sede)}
                        >
                            Editar
                        </BtnEdit>
                    </ContainerEdit>
                    
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle className='font-one'>Correo de contacto</ContainerBaseTitle>
                        <p className='font-two'>El correo que ingreses correponde al correo de contacto donde tus usuarios podrán escribir si es necesario</p>
                    </ContainerBaseTwo>

                    <ContainerEdit>
                        <Input
                            type="text"
                            name="correo"
                            placeholder={e.correo}
                            value={correo}
                            onChange={handleInputChange}
                        />

                        <BtnEdit
                            className='font-one'
                            type="button"
                            value="update"
                            onClick={() => handleUpdate(e.sede)}
                        >
                            Editar
                        </BtnEdit>
                    </ContainerEdit>
                    
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle className='font-one'>Paquete asignado<Span>*</Span></ContainerBaseTitle>
                        <p className='font-two'>Ya no se puede cambiar</p>
                    </ContainerBaseTwo>

                    <ContainerEdit>
                        <Input
                            placeholder={e.paqueteAsignado}
                        />
                    </ContainerEdit>
                    
                </ContainerBase>

                <ContainerBase>
                    <ContainerBaseTwo>
                        <ContainerBaseTitle className='font-one'>Color del instituto (opcional)</ContainerBaseTitle>
                        <p className='font-two'>Esta imagen será usada para mostrar el instituto en búsquedas y en su página de inicio</p>
                    </ContainerBaseTwo>

                    <ContainerColors>
                        <ColorCapa style={{background: "#99D438"}}>
                            <Color></Color>
                        </ColorCapa>

                        <ColorCapa style={{background: "#FFD100"}}>
                            <Color></Color>
                        </ColorCapa>

                        <ColorCapa style={{background: "#2990F0"}}>
                            <Color></Color>
                        </ColorCapa>

                        <ColorCapa style={{background: "#6680E3"}}>
                            <Color></Color>
                        </ColorCapa>

                        <ColorCapa style={{background: "#FF3548"}}>
                            <Color></Color>
                        </ColorCapa>
                        
                        <ColorCapa style={{background: "#FFBB62"}}>
                            <Color></Color>
                        </ColorCapa>
                    </ContainerColors>
                </ContainerBase>

                <ContainerActions >
                    <BtnDelete>
                        <IconDelete src="https://res.cloudinary.com/silviajcn/image/upload/v1644940836/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/basura_tph30k.svg" alt="icon" />
                        <DeleteP
                            className='font-one'
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
                        <Link to="/institutos" className="links">    
                            <BtnUpdate
                                className='font-one'
                                type="button"
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