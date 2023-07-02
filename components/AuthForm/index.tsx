import React, { useContext, useState } from 'react'
import { dataContext } from '../../context/dataContext';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function AuthForm() {
    const [ key, setKey ] = useState('')
    const { setModalOpen, setLoading } = useContext( dataContext );
    const { setAuth } = useLocalStorage();
  return (
    <form onSubmit={async (e) => {
        e.preventDefault();
        setModalOpen( false );
        setLoading( true );
        await setAuth( key )
        
    }}   className='bg-violet-500 rounded-lg w-1/2 h-2/5 flex flex-col items-center'>
            <h2 className='text-center staat font-light text-3xl text-white p-3 border-b border-b-white w-full'>Ups...Quizás no eres quien quiero que seas</h2>
            <p className=' noto font-light text-lg text-white p-3 w-full'>O quizás si, de cualquier forma, dime la clave secreta:</p>
            <h3 className='staat font-light text-3xl text-white px-3 py-1'>Clave secreta</h3>
            <input type='text' className='outline-none w-1/2 block rounded-lg px-2 py-1 great-vibes text-4xl' value={key} onChange={(e) => setKey(e.target.value)}/>

    </form>
  )
}
