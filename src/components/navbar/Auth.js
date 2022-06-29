/* import React from "react";
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

const Auth = (props) => {
    const firebase = useFirebaseApp();
    const provider = new firebase.auth.GoogleAuthProvider();
    const signIn = () => {
        firebase.auth().signInWithPopup(provider);
    }
    return (
        <div className="container text-center minHeight">

            <div className="row App">

                <h1 className="my-3">Auth</h1>
                <button onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
}
export default Auth;
// Language: javascript */
