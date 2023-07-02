import React, { useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { dataContext } from '../../context/dataContext'

const openStyles = ['z-[39]', 'flex', 'fadein']
const closeStyles = ['z-[-1]', 'none', 'fadeout']

export default function Modal({children}:{children?:React.ReactNode}) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  
  const { modalOpen } = useContext( dataContext );
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(".modal")
    setMounted(true)
  }, [])

  useEffect(() => {


    if( modalOpen ){
      openStyles.forEach( cl => ref.current.classList.add( cl ) )
      closeStyles.forEach( cl => ref.current.classList.remove( cl ) )

    }else{
      closeStyles.forEach( cl => ref.current.classList.add( cl ) )
      openStyles.forEach( cl => ref.current.classList.remove( cl ) )
    }

  }, [ modalOpen ])
  //${modalOpen ? 'z-[39] flex' : 'z-[-1] none'}
  return (mounted && ref.current) ?
  createPortal(
    <section className={`w-full h-screen z-40 justify-center items-center ${ modalOpen ? 'flex' : 'hidden' }`}>{children}</section>,
    ref.current
  )
  :
  null
}
