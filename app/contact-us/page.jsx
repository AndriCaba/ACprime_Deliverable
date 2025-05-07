import ContactForm from '@/components/contact-form';
import Section1 from './components/section1';
import Section2 from './components/section2';
const Home = () => {
  return (
    <div className="bg-navy-500/20">
      {/* <Section1 /> */}
      <Section2 />
      <section className="container">{/* <ContactForm /> */}</section>
    </div>
  );
};

export default Home;
