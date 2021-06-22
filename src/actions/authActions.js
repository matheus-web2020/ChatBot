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

export const singUpCliente = (user) => {

    return async (dispatch) => {

        const db = firestore();

        dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST` });  

        auth()
            .createUserWithEmailAndPassword(user.email, user.senha)
            .then(data => {
                console.log(data)
                const currentUser = auth().currentUser;
                const infos = `${user.nome} ${user.cpf}`
                currentUser.updateProfile({
                    displayName: infos
                })
                     .then(() => {
                        db.collection('users')
                            .doc('cliente').doc(data.user.uid)
                            .set({
                                nome: user.nome,
                                cpf: user.cpf,
                                uid: data.user.uid,
                            })
                            .then(() => {
                                const loggedInUser = {
                                    uid: data.user.uid,
                                    nome: user.nome,
                                    cpf: user.cpf,
                                    email: user.email
                                }
                                localStorage.setItem('user', JSON.stringify(loggedInUser));
                                console.log('Usuario Logado');
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                                    payload: { user: loggedInUser }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                                    payload: { error }
                                });
                            });
                     });
            })
            .catch(error => {
                console.log(error);
            })
    }

}

