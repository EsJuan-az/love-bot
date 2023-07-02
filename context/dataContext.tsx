import axios, { AxiosResponse } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import user from '../pages/api/user';
 
export const dataContext = createContext({});


export function DataProvider({children}:{children:React.ReactNode}) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState( false );
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ sideBarOpen, setSideBarOpen ] = useState(false);
    
    const [elements, setElements] = useState([]);
    
    const value = {
        loading,
        setLoading,
        error, 
        modalOpen,
        setModalOpen,
        elements,
        sideBarOpen,
        setSideBarOpen
    }

    useEffect( () => {
        Promise.all([
            axios.get(`/api/plan`),
            axios.get(`/api/memory`)
        ])
            .then( ( [ {data: { ok: okp, plans }}, {data: { ok: okm, memories }} ] :any[]  ) => {
                if( !okp || !okm ) return setError( true );
                plans = plans.map( async( plan:any ) => {
                    let data:Object;
                    if( plan.authorId ){
                        let { data:{ user } } = await axios.get(`/api/user/${plan.authorId}`)
                        data = user
                        }
                    return {
                        type: 'plan',
                        ...plan,
                        author: data
                    }
                });
                memories = memories.map( async( memory:any ) => {
                    let data:Object;
                    if( memory.authorId ){
                        let { data:{ user } } = await axios.get(`/api/user/${memory.authorId}`)
                        data = user
                        }
                    return {
                        type: 'memory',
                        ...memory,
                        author: data
                    }
                });
                return Promise.all([ ...memories, ...plans ]);
            })
            .then( list => {
                setElements( list );
            } )
            .catch( () => {
                setError( true );
            })
            .finally( () => {
                setLoading( false );
            } );
        
    }, []);

    
    return (
      <dataContext.Provider value={value}>
        {children}
      </dataContext.Provider>
    )
  }


