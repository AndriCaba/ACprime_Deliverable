import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';

const About = () => {
  return (
    <div>
      <Section1 />
      <div className="bg-navy-500/20">
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 /> */}
      </div>
    </div>
  );
};

export default About;
