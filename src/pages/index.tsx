import type { NextPage } from 'next'
import { DetailedAbout } from '../components/DetailedAbout';
import { Headline } from '../components/Headline';
import { MyService } from '../components/MyService';

const Home: NextPage = () => {
  return (
    <>
      <Headline />
      <DetailedAbout />
      <MyService />
    </>
  );
}

export default Home
