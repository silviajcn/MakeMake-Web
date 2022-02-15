import { typesInstitutos } from '../types/types';

const initialState = {
    institutes: [],
    updateItem: {
        nombre: '',
        telefono: '',
        correo: '',
        color: '',
    }
}

export const institutosReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesInstitutos.list:
            return {
                institutes: [...action.payload]
            }
        
        case typesInstitutos.search:
            return {
                institutes: action.payload
            }

        case typesInstitutos.details:
            return {
                institutes: action.payload
            }
        
        case typesInstitutos.update:
            return {
                ...state,
                updateItem: action.payload
            }

        case typesInstitutos.delete:
            return {
                institutes: state.institutes.filter(inst => inst.sede !== action.payload)
            }
    
        default:
            return state;
    }
}