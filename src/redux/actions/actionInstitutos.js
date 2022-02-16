import { typesInstitutos } from '../types/types';
import { collection, getDocs, query, where, doc, updateDoc, deleteDoc } from "@firebase/firestore";
import { db } from '../../firebase/firebaseConfig';




//DELETE INSTITUTOS ---------------------------------------------

//Action Delete Institutos Async
export const deleteInstitutosAsync = (sede) => {
    return async (dispatch) => {

        const instCollection = collection(db, "institutos");
        const q = query(instCollection, where("sede", "==", sede))
        //console.log(q);

        const datos = await getDocs(q);
        //console.log(datos);

        datos.forEach((docu) => {
            //console.log(docu.id);
            deleteDoc(doc(db, "institutos", docu.id));
        })
        dispatch(deleteInstitutosSync(sede));
    }
}

//Action Delete Institutos Sync
export const deleteInstitutosSync = (sede) => {
    return {
        type: typesInstitutos.delete,
        payload: sede
    }
}



// UPDATE INSTITUTOS ---------------------------------------------

// Action Update Institutos Async
export const updateInstitutoAsync = (institutes) => {
    //console.log(institutes);

    return async (dispatch) => {

        const instCollections = collection(db, "institutos")
        const q = query(instCollections, where("sede", "==", institutes.sede))
        const data = await getDocs(q)
        //console.log(data);

        data.forEach((docu) => {
            updateDoc(doc(db, "institutos", docu.id), {
                nombre: institutes.nombre,
                telefono: institutes.telefono,
                correo: institutes.correo,
                color: institutes.color,
            })
        })
        dispatch(listInstitutosAsync())
    }
}

// Action update Institutos Sync
export const updateInstitutoSync = (sede, institutes) => {
    return {
        type: typesInstitutos.update,
        payload: {
            sede,
            ...institutes
        }
    }
}


// SHOW DETAILS INSTITUTOS ---------------------------------------------

// Action Show Detail Institutos Async
export const showDetailInstitutoAsync = (sede) => {

    return async (dispatch) => {
        const instCollections = collection(db, "institutos");
        const q = query(instCollections, where("sede", "==", sede))
        const datos = await getDocs(q);
        //console.log(datos);

        const instituto = [];
        datos.forEach((doc) => {
            instituto.push(doc.data())
        })
        //console.log(instituto);
        dispatch(showDetailInstitutoSync(instituto))
    }
}

// Action Show Detail Institutos Sync
export const showDetailInstitutoSync = (instituto) => {
    return {
        type: typesInstitutos.details,
        payload: instituto
    }
}



// SEARCH INSTITUTOS ---------------------------------------------

// Action Search Institutos Async
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
        //console.log(institute);
        dispatch(searchInstitutoSync(institute))
    }
}

// Action Search Institutos Sync
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