import { NextRequest, NextResponse } from 'next/server';
import { without } from 'lodash';
import prismadb from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function POST(req: NextRequest) {
  try {
    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error('Invalid Id');
    }

    // const user = await prismadb.user.update({
    //   where: {
    //     email: session?.user?.email || '',
    //   },
    //   data: {
    //     favoriteIds: {
    //       push: movieId,
    //     },
    //   },
    // });

    // return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { movieId } = await req.json();

    console.log(session + 'a');

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error('Invalid Id');
    }

    const favouriteMovies = await prismadb.user.findUnique({
      where: {
        email: session?.user?.email || '',
      },
      select: {
        favoriteIds: true,
      },
    });

    console.log(favouriteMovies);

    // const updatedFavouriteMovies = favouriteMovies?.filter((movie) => movie !== movieId);

    // const updatedUser = await prismadb.user.update({
    //   where: {
    //     email: session?.user?.email || '',
    //   },
    //   data: {
    //     favoriteIds: favouriteMovies?.filter((movie) => movie !== movieId),
    //   },
    // });

    return NextResponse.json('aaa', { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
}
