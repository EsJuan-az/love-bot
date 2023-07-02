import React, { useContext } from 'react'
import { dataContext } from '../context/dataContext'
import ShowCase from "../components/ShowCase";


export default function Home() {
  const { elements } = useContext( dataContext );
  return (
    <>
    <ShowCase elements={elements} shuffle={true} />
    </>
  )
}
