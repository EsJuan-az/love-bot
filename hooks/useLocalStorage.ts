'use client'
import axios from "axios";
import { useEffect, useState } from "react";



export default function useLocalStorage(){
    const [auth, changeAuth] = useState(null);
    useEffect( () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const pastAuth = window.localStorage.getItem('auth');
            if( !pastAuth ) changeAuth( null );
            else changeAuth( JSON.parse(pastAuth) );
        }
        }, [] );

    const setAuth = async(authValue:string) => {
        try{
            const { data:{ ok, user } } = await axios.get(`/api/pu/${authValue}`);
            console.log( ok, user );
            if( ok ){
                changeAuth( user );
                window.localStorage.setItem('auth', JSON.stringify( JSON.stringify( user ) ));
            }else{
                changeAuth( null );
            }
        }catch(err){
            changeAuth( null );
        }
    }
    return {
        auth,
        setAuth
    }
}