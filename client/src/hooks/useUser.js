import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // DO NOT TOUCH
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });
        //whenever change in user state is detected by auth provider module, sets isLoading to false. prevents 'shoot first, as later' approach to authentication

        return unsubscribe;
    }, []);
    //empty array prevents data leaks & unintended loops

    return { user, isLoading };
}

export default useUser;