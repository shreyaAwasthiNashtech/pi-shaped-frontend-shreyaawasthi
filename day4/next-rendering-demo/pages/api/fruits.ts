import type { NextApiRequest, NextApiResponse } from 'next';

const fruits = ['Apple', 'Banana', 'Pomegranate', 'Lichi', 'Strawberry'];

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse<string[]>
) {
  res.status(200).json(fruits);
}
