
import React,{createContext, useState} from 'react'

const AuthContext=createContext({})



export const AuthProvider=({children})=>{
    const [AuthToken, setAuthToken] = useState({});
    const [User, setUser] = useState({});

    return(
        <AuthContext.Provider value={{AuthToken,setAuthToken,User,setUser}}>{children}</AuthContext.Provider>
    )
}
export default AuthContext;