import { typesInstitutos } from '../types/types';

const initialState = {
    institutes: []
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
        
        // case typesInstitutos.update:
        //     return {
        //         ...state,
        //     }
    
        default:
            return state;
    }
}