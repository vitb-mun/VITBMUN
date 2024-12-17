import EventHeader from "../../Components/EventHeader";
import Footer from "../../Components/Footer";
import MUNMATE from "../../Events/MUNMATE";
const MUNMATELayout = () => {
  return (
    <div>
      <EventHeader></EventHeader>
      <MUNMATE></MUNMATE>
      <Footer></Footer>
    </div>
  );
};

export default MUNMATELayout;
