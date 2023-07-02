import React, { useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import Memory from '../Memory';
import Plan from '../Plan';
import { Skeleton } from '@chakra-ui/react';

const types = {
    'plan': Plan,
    'memory': Memory
};


const getCardSkeletons = (n) => {
    let skeletons = []
    for( let i = 0; i < n; i++ ){
        skeletons.push( <Skeleton  borderStartEndRadius='0.5rem' startColor='#9681EB' endColor='#FFF' className='shadow-xl hover:shadow-2xl  p-3 rounded-lg m-6 relative' height='16rem' width='15rem' key={i}/> )
    }
    return skeletons
}

export default function ShowCase({ elements, shuffle=false }) {
    const { loading } = useContext( dataContext );
    let displayElements = elements;
    if( shuffle ){
        displayElements = displayElements.sort( () => 0.5 - Math.random() );
    }
    displayElements = displayElements.map( ({type, ...el}) => {
        let Tag = types[type]
        return <Tag {...el} key={el.id}/>
    })

  return (
    <ul className="flex flex-wrap justify-center">
        {
            !loading
            ?
            displayElements
            :
            getCardSkeletons(8)
        }
    </ul>
  )
}
