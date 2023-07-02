import axios from "axios"
import type { NextApiRequest, NextApiResponse } from "next";

const methods = {
    async GET(req:NextApiRequest, res:NextApiResponse){
        try{
            const resp = await axios.get(`https://bot-backend-k98u.onrender.com/plan`);
            return res.json(resp.data)
        }catch(err){
            console.log(err);
            return res.json({ ok: false, err })
        }
    },
    async PUT(req:NextApiRequest, res:NextApiResponse){
        const {body: { description, priority, status, title }, params: {id}} = req.body;
        const body = { description, priority, status, title };
        try{
            const resp = await axios.put(`https://bot-backend-k98u.onrender.com/plan/${id}`,body);
            return res.json( resp.data )
        }catch(err){
            console.log(err);
            return res.json({ ok: false, err })
        }
    }
}


export default async function( req:NextApiRequest, res:NextApiResponse ){
    const { method:m } = req;
    let method = methods[m];
    if( !method ) return res.status(400).json({ ok: false })
    method( req, res );
}

