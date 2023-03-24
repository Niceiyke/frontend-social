
import React,{createContext, useState} from 'react'

const AuthContext=createContext({})



export const AuthProvider=({children})=>{
    const [AuthToken, setAuthToken] = useState(localStorage?.getItem('accessToken')? JSON.parse(localStorage.getItem('accessToken')):null);
    const [User, setUser] = useState(localStorage?.getItem('activeUser')? JSON.parse(localStorage.getItem('activeUser')):null);


    return(
        <AuthContext.Provider value={{AuthToken,setAuthToken,User,setUser}}>{children}</AuthContext.Provider>
    )
}
export default AuthContext;