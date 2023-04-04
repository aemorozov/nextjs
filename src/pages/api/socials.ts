import { socials } from './data/socials'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number;
  icon: string;
  path: string;
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { 
  if(req.method === 'GET') {
    res.status(200).json(socials)
  }
}