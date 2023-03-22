
import React,{createContext} from 'react'


const AuthContext=createContext()

export const AuthProvider=()=>{



let contextData={
    
}
    return(
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    )
}