import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handlerSubmitForms(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(res)
  console.log(req)
  const data = req.body
  console.log(data)
  res.status(200).json( data )
}