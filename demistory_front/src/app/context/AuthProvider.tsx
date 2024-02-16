"use client"
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthProviderContext = createContext({})

export function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [token,setToken] = useState(null)

    const login = async ({username,password} : {username : string,password:string}) => {

        let result = await fetch("http://127.0.0.1:3001/auth/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "username" : username,
                "password" : password
            })
        })

        if(result.ok){
            let data = await result.json();
            console.log("login data : ",data)
            localStorage.setItem("access_token",data.access_token)
            setToken(data.access_token)


            let meresult  = await fetch("http://127.0.0.1:3001/auth/profile",{
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " + data.access_token
                }
            })

            if(meresult.ok) {
                let me = await meresult.json()
                console.log("login me : ",me)
                localStorage.setItem("me",JSON.stringify(me))
                setUser(me)
            }

            return true

        }else {
            localStorage.removeItem("access_token")
            setToken(null)
            setUser(null)
            return false
        }

    }

    const logout = async () => {
        localStorage.removeItem("me")
        localStorage.removeItem("access_token")
        setToken(null)
        setUser(null)

    }


    return (
        <AuthProviderContext.Provider value={{login,logout,user}}>
            {children}
        </AuthProviderContext.Provider>
    )
}