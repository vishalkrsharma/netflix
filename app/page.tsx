import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import axios from 'axios';

const getMovies = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/movies`);
  return data;
};

const getUserData = async (email: string) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/me?email=${email}`);

  return data;
};

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth');

  const movies = await getMovies();
  const userData = await getUserData(session?.user?.email || '');

  return (
    <>
      <Navbar name={session?.user?.name} />
      <Billboard />
      <div className='pb-40'>
        <MovieList
          data={movies}
          title='Trending Now'
        />
      </div>
    </>
  );
};

export default Home;
