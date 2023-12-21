import { NextResponse } from 'next/server';
import serverAuth from '@/app/lib/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest) {
  try {
    const { currentUser } = await serverAuth(req);

    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 400 });
  }
}
