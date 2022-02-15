import { typesInstitutos } from '../types/types';
import { collection, getDocs, query, where, doc, updateDoc } from "@firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

// SEARCH INSTITUTOS ---------------------------------------------
// Action Search Institutos Async


// Action Search Institutos Sync



// UPDATE INSTITUTOS ---------------------------------------------

// Action Update Institutos Async
export const searchInstitutoAsync = (instituto) => {

    return async (dispatch) => {
        const instCollections = collection(db, "institutos");
        const q = query(instCollections, where("sede", "==", instituto))
        const datos = await getDocs(q);
        //console.log(datos);

        const institute = [];
        datos.forEach((doc) => {
            institute.push(doc.data())
        })
        console.log(institute);
        dispatch(searchInstitutoSync(institute))
    }
}

// Action update Institutos Sync
export const searchInstitutoSync = (instituto) => {
    return {
        type: typesInstitutos.search,
        payload: instituto
    }
}



// LIST INSTITUTOS ---------------------------------------------

// Action List Institutos Async
export const listInstitutosAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "institutos"));
        //console.log(querySnapshot);

        const institutes = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());

            institutes.push({
                ...doc.data()
            })
        });
        //console.log(institutes);
        dispatch(listInstitutosSync(institutes));

    }
}

// Action List Institutos Sync
export const listInstitutosSync = (institutos) => {
    return {
        type: typesInstitutos.list,
        payload: institutos
    }
}