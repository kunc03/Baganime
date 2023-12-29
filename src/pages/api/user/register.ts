import { signUp } from '@/lib/firebase/service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await signUp(req.body, (status: boolean) => {
      if (status) {
        return res.status(200).json({ status: true, statusCode: 200, messaage: 'success' });
      } else {
        return res.status(400).json({ status: false, statusCode: 400, messaage: 'failed' });
      }
    });
  } else {
    return res.status(405).json({ status: false, statusCode: 405, messaage: 'Method Not Allowed' });
  }
}
