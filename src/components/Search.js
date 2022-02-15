import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { searchInstitutoAsync } from '../redux/actions/actionInstitutos';
import {
    FirtsContainer,
    FormContainer,
    InputSearch,
    BtnSearch,
    IconImg,
} from '../styles/Search.elements';

const Search = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            search: '',
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchInstitutoAsync(search))
            console.log(search);
        }
    })

    return (
        <FirtsContainer>
            <FormContainer onSubmit={formik.handleSubmit}>
                <InputSearch
                    id="search"
                    name="search"
                    type="text"
                    aria-label="Search Products"
                    placeholder="Busca aquí por nombre de sede"
                    onChange={formik.handleChange}
                />
                <BtnSearch
                    type="submit"
                >
                    <IconImg src="https://res.cloudinary.com/silviajcn/image/upload/v1644892822/Pruebas%20Tecnicas/MakeMake/PaginaWeb/icons/lupa_wnf8iz.svg" alt="search" />
                </BtnSearch>
            </FormContainer>
        </FirtsContainer>
    )
};

export default Search;