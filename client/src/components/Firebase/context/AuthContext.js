import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
//createContext() returns two (related) components: 'Provider' & 'Consumer'
// Provider takes a 'value' prop and uses it to - provide - state to its children components when requested
//Consumer uses the state (Only 1 time per request) passed down by the provider

export function useAuth() {
    return useContext(AuthContext);
}
//useAuth() allows context to be consumed within the app 
//Look at the return statement, and compare to AuthContext's value assignment - useContext vs createContext (consumer vs provider)



export function AuthProvider({ children }) {
    

    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState('');

    //lines 18-21  will allow an (active) account's details to be retrieved for inspection and/or reference 

    const [loading, setLoading] = useState(true);
    //USED TO CHECK WHETHER USER IS TRULY LOGGED OUT, OR IF THE PAGE IS SIMPLY LOADING & INFO ISN'T AVAILABLE QUITE YET


    function signUpUser(email, password) {
        //Remember: User will be logged in automatically after completing signup
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signOutUser() {
        return signOut(auth);
    }

    function updateUserProfile(user, profile) {
        return updateProfile(user, profile);
    }

    // Both 'signUpUser' & 'logInUser' will return a Promise, which will later be consumed within each function's respective component

    useEffect(() => {
        //BEST TO USE setCurrentUser WITHIN useEffect ALONG WITH AN OBSERVER (onAuthStateChanged). PREVENTS THE USER STATE FROM BEING CHECKED & UPDATED EACH AND EVERY TIME THAT THE COMPONENT MOUNTS, AND ONLY DOES IT THE FIRST TIME. AFTER THE FIRST MOUNT, THE APP 'UNSUBSCRIBES' FROM FURTHER REPETITIONS
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
            //AFTER THE OBSERVER EVENT TRIGGERS THE HOOK, isLoading IS NO LONGER GOING TO BE TRUE. SETTING IT TO FALSE ALLOWS THE PROGRAM TO CONTINUE WITH THE AUTH PROCESS 
        });

        return unsubscribe;
    }, []);
    //INCLUDING THE EMPTY ARRAY AT THE END OF useEffect HELPS TO PREVENT THE FUNCTION FROM MISFIRING
    const value = {
        currentUser,
        setError,
        signUpUser,
        logInUser,
        signOutUser,
        updateUserProfile,
        error,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
    //"{ !loading && children } " prevents the children components (user info) from rendering before firebase finishes updating the account
}
//AuthProvider wraps the Provider and allows it to be delivered to the children/Consumer components. Like packaging something for shipping

