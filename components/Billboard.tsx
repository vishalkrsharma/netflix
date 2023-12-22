import axios from 'axios';
import { FaCircleInfo } from 'react-icons/fa6';

const getData = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/random`);
  return data;
};

const Billboard = async () => {
  const billboardVideo = await getData();

  return (
    <div className='relative h-[56.25vw]'>
      <video
        className='w-full h-[56.25vw] object-cover brightness-[60%]'
        autoPlay
        muted
        loop
        poster={billboardVideo?.thumbnailUrl}
        src={billboardVideo?.videoUrl}
      />
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>{billboardVideo?.title}</p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>{billboardVideo?.description}</p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
            <FaCircleInfo className='w-4 md:w-7 mr-1' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
