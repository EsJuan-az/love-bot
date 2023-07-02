import React, { useEffect, useState } from 'react'
import { GrFormNext } from 'react-icons/gr'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';


type Props = {
    id:string , 
    title:string, 
    description:string, 
    date:string, 
    stars:number, 
    tags:string[], 
    images:string[],
    author: any
}

const starSVGs = {
    true: AiFillStar,
    false: AiOutlineStar
};

export default function Memory({id , title, description, tags, images, stars:st, date, author}:Props) {
    const [ imgIndex, setImgIndex ] = useState(0)
    const [profile, setProfile] = useState('https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg');
    const [ stars, changeStars ] = useState( st );

    const setStars = (val) => {
        changeStars( val );
    }

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
        />
    ));

    const displayStars = [];
    for( let i = 1; i <= 5 ; i++){
        const Component = starSVGs[ `${i <= stars}` ]
        displayStars.push( <Component className='fill-amber-400 cursor-pointer text-2xl' key={i} onClick={() => {
            setStars(i)
        }}/> )
    }


    
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
            <span className='absolute bottom-2 right-2 noto bg-white/80 rounded-lg text-black text-xs m-1 px-3 py-0.5'>
                {new Date(date).toLocaleDateString('es-ES')}
            </span>
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

            <span className='flex flex-col-reverse absolute bottom-[3px] left-[3px]'>{displayStars}</span>

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
