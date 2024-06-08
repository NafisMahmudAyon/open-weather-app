// import { data } from '@/app/api/city/city.list';
// import { NextApiRequest, NextApiResponse } from 'next';

// // Adjust the page size based on your requirements
// const PAGE_SIZE = 100;

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { name, page = 1 } = req.query;
  
//   if (typeof name !== 'string') {
//     return res.status(400).json({ error: 'Invalid input' });
//   }

//   const startIndex = (page - 1) * PAGE_SIZE;
//   const endIndex = startIndex + PAGE_SIZE;
  
//   const filteredCities = data
//     .filter(city => city.name.toLowerCase().startsWith(name.toLowerCase()))
//     .slice(startIndex, endIndex);

//   res.status(200).json(filteredCities);
// }
