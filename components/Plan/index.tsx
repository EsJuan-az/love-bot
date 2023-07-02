import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { BiMessageSquareAdd, BiMessageSquareCheck, BiMessageSquareEdit, BiMessageSquareX, BiRepeat } from 'react-icons/bi'


type Props = {
    id:string , 
    title:string, 
    description:string, 
    priority:number, 
    status:string, 
    tags:string[], 
    images:string[],
    author: any
}

const statusCodes = {
    'pn': BiMessageSquareAdd,
    'pl':BiMessageSquareEdit,
    'h': BiMessageSquareCheck,
    'e': BiMessageSquareX,
    'r': BiRepeat
}

export default function Plan({id , title, description, priority, status, tags, images, author}:Props) {
    const [ imgIndex, setImgIndex ] = useState(0)
    const [profile, setProfile] = useState('https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg');
    
    useEffect( () => {
        if( author.profilePic ) setProfile( author.profilePic );
    } ,[])

    const incrementImgIndex = () => {
        if( imgIndex + 1 >= images.length ) return setImgIndex(0)
        return setImgIndex( imgIndex + 1 )
    }
    
    const emojis = ['(^3^)','(7w7)', '<3', ':p', ':D', ':3'].sort(() => 0.5 - Math.random());    
    images.length == 0 && images.push(`https://placehold.co/400x400/4C1D95/FFFFFF?text=${emojis[0]}&font=Source Sans Pro`);

    const displayImages = images.map( ( src, i ) =>(
        <img
            className={`absolute w-full h-full object-cover rounded-lg shadow-xl ${ i == imgIndex ? 'fadein' : 'fadeout' }`}
            src={src}
            alt={title}
            key={i}
        />
    ));
    
    const StatusIcon = statusCodes[status];
  return (
    <li id='card'
        className='bg-violet-500 w-60 h-64 shadow-xl hover:shadow-2xl  p-3 rounded-lg m-6 relative'>
        
        <figure className='absolute z-[1] top-[-10px] left-[-10px] '>
            <img className="w-14 rounded-full" src={profile} alt="autor@"/>
        </figure>

        <figure className='relative mb-2 w-full h-4/5'>
                { 
                    displayImages
                }
            <section className='absolute bottom-[5px] left-0 '>
            {
            tags.slice(0,2).map( tag => (
                    <span key={tag} className=' noto bg-white/80 rounded-lg text-black text-xs m-1 px-3 py-0.5'>
                        {tag}
                    </span>
            ))
            }
            </section>
            
            {
                images.length > 1
                ? 
                <button
                    className={`add cursor-pointer outline-none absolute top-0 right-0 flex justify-center shadow-2xl m-2 items-center text-black bg-white  w-6 h-6 p-1 rounded-full`}
                    onClick={incrementImgIndex}>
                        <GrFormNext/>
                </button>   
                :
                undefined
            }
        <span className='absolute bottom-1 right-1'><StatusIcon className='fill-violet-500 text-3xl'/></span>
        </figure>
        
        <p className='flex justify-between'>
            <span  className='text-sm font-medium noto text-white'>{title}</span>
        </p>
        <span className='absolute bottom-0 right-0 bg-black/60 rounded-lg text-white text-xs m-1 px-3 py-0.5'>
                {id.slice(0,5)}
        </span>
    </li>
  )
}
