import type { NextPage } from 'next';
import { Companies } from '../components/Companies';
import { FormGetInTouch } from '../components/FormGetInTouch';
import { DetailedAbout } from '../components/DetailedAbout';
import { Headline } from '../components/Headline';
import { HireMe } from '../components/HireMe';
import { MySelectedWork } from '../components/MySelectedWork';
import { MyService } from '../components/MyService';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { ClickedUserProvider } from '../context';

const Home: NextPage = () => {
  return (
    <ClickedUserProvider>
      <Headline />
      <DetailedAbout />
      <MyService />
      <MySelectedWork />
      <Companies />
      <HireMe />
      <Testimonials />
      <FormGetInTouch />
      <Footer />
    </ClickedUserProvider>
  );
};

export default Home;
