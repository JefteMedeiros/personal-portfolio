import type { NextPage } from 'next'
import { Companies } from '../components/Companies';
import { DetailedAbout } from '../components/DetailedAbout';
import { Headline } from '../components/Headline';
import { MySelectedWork } from '../components/MySelectedWork';
import { MyService } from '../components/MyService';

const Home: NextPage = () => {
  return (
    <>
      <Headline />
      <DetailedAbout />
      <MyService />
      <MySelectedWork />
      <Companies />
    </>
  );
}

export default Home
