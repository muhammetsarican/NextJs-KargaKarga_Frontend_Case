"use client"

import { createContext, useState } from "react"

type UserContextType={
    isUserLogin:Boolean
    setIsUserLogin(value: Boolean):void
    token:string
    setToken(value:string):void
}

const UserContext = createContext<UserContextType>({
    isUserLogin:false,
    setIsUserLogin:()=>{},
    token:"",
    setToken:()=>{}
});

const UserProvider = ({ children }) => {
    const [isUserLogin, setIsUserLogin] = useState<Boolean>(false);
    const [token, setToken]=useState("");

    const values = {
        isUserLogin,
        setIsUserLogin,
        token,
        setToken
    }
    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

export {
    UserProvider,
    UserContext
}