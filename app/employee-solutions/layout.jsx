import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-[65px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
