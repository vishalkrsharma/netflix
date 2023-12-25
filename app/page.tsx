import { getServerSession } from 'next-auth';
import { authOptions } from './lib/authOptions';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import axios from 'axios';

const getMovies = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/movies`);

  return data;
};

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth');

  const data = await getMovies();
  return (
    <>
      <Navbar name={session?.user?.name} />
      <Billboard />
      <div className='pb-40'>
        <MovieList
          data={data}
          title='Trending Now'
        />
      </div>
    </>
  );
};

export default Home;
