import Banner from './components/banner';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Section4 /> */}
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
