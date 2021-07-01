import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { authConstants } from "./constants";

const auth = () => {
    return (
        firebase.auth()
    )
}
const firestore = () => {
    return (
        firebase.firestore()
    )
}

export const logout = (uid) => {
    return async dispatch => {
        dispatch({ type: `${authConstants.USER_LOGOUT}_REQUEST` });
        //Now lets logout user

        const db = firestore();
        db.collection('users').doc('tipoUsuario').collection('userComum')
            .doc(uid)
            .update({
                isOnline: false
            })
            .then(() => {

                auth()
                    .signOut()
                    .then(() => {
                        //successfully
                        localStorage.clear();
                        dispatch({ type: `${authConstants.USER_LOGOUT}_SUCCESS` });
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch({ type: `${authConstants.USER_LOGOUT}_FAILURE`, payload: { error } })
                    })

            })
            .catch(error => {
                console.log(error);
            })




    }
}


export const signInCliente = (user) => {

    return async dispatch => {

        dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST` });
        auth()
            .signInWithEmailAndPassword(user.emailLogin, user.senhaLogin)
            .then((data) => {
                console.log(data)

                const db = firestore();

                db.collection('users')
                    .doc(data.user.uid)
                    .get()
                    .then((doc) => {
                        const loggedInUser = {
                            // nome: doc.data().nome,
                            // cpf: doc.data().cpf,
                            email: user.emailLogin
                        }

                        localStorage.setItem('user', JSON.stringify(loggedInUser));

                        dispatch({
                            type: `${authConstants.USER_LOGIN}_SUCCESS`,
                            payload: { user: loggedInUser }
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })


            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                    payload: { error }
                })
            })

    }
}