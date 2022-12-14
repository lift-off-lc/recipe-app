import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//onAuthStateChanged:   Think of it as a box that allows the appropriate callback functions to be "shipped" whenever the user: {logs in / logs out / creates account}.
//getAuth: Checks with firebase *which* account is making/receiving the action 


//useUser: Custom hook that allows pages to check *if* a user (and *which* user) is currently logged in on the fly
const useUser = () => {

    const [user, setUser] = useState(null);
        //"user == null" can mean two things:   
            //The obvious option is that they simply aren't logged in. 
            //The 'sneaky' option is that the user info is still being loaded from firebase
    
    const [isLoading, setIsLoading] = useState(true);
        // Defaulting isLoading to true allows the page to avoid a "shoot first, questions later" approach to authorization. Nothing about this app necessitates a 'John Wick' level of protection

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });
        //on state change, set the user to the intended firebase user object and set isLoading to false. 

        return unsubscribe;
        //Calls useEffect whenever the DOM changes (navigates away from page, etc), and prevents memory leaks
    }, [])
    //passing empty array to this 'useEffect' will prevent it from being called every time the page updates 

    return { user, isLoading };
    //makes user & isLoading accessible to other pages & components

}
export default useUser;