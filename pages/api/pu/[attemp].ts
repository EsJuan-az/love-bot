import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next";
export default async function( req:NextApiRequest, res:NextApiResponse ){
    try{
        const { query: { attemp } } = req;
        const resp = await axios.get(`https://bot-backend-k98u.onrender.com/pu/${attemp}`);
        return res.json(resp.data)
    }catch(err){
        console.log(err);
        return res.json({ ok: false, err })
    }
}