import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const email = params.get('email');

    const user = await prismadb.user.findUnique({
      where: {
        email: email || '',
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
}
