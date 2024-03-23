"use client"

import { createContext, useContext, useState } from "react"

type UserContextType = {
    isUserLogin: Boolean
    setIsUserLogin(value: Boolean): void
    user: Object
    setUser(value: string): void
}

const UserContext = createContext<UserContextType>({
    isUserLogin: false,
    setIsUserLogin: () => { },
    user: {},
    setUser: () => { }
});

const UserProvider = ({ children }) => {
    const [isUserLogin, setIsUserLogin] = useState<Boolean>(false);
    const [user, setUser] = useState({});

    const values = {
        isUserLogin,
        setIsUserLogin,
        user,
        setUser
    }
    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

const useUser = () => useContext(UserContext);

export {
    useUser,
    UserProvider
}