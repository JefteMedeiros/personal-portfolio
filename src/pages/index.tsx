import type { NextPage } from 'next'
import { Companies } from '../components/Companies';
import { DetailedAbout } from '../components/DetailedAbout';
import { Headline } from '../components/Headline';
import { HireMe } from '../components/HireMe';
import { MySelectedWork } from '../components/MySelectedWork';
import { MyService } from '../components/MyService';
import { Testimonials } from '../components/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Headline />
      <DetailedAbout />
      <MyService />
      <MySelectedWork />
      <Companies />
      <HireMe />
      <Testimonials />
    </>
  );
}

export default Home
