import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const Layout = () => {
  return (
    <div>
      <Loader></Loader>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
