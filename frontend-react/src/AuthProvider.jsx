import { useState,useContext, createContext } from "react"

//create the context
const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(
        // !! is used to give true or false as answer or output
        !!localStorage.getItem('accessToken')
    )
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}