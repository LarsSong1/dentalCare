'use client'

import { useContext, createContext, useState, useEffect, ReactNode, } from "react"

type AuthContextType = {

}

const AuthContext = createContext<AuthContextType | undefined>(undefined)



export const AuthProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}   



export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context){
        throw new Error('No hay contexto de Authenticación definido')
    }
    return context
}