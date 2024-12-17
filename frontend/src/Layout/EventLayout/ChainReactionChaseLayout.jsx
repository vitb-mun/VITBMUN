import EventHeader from "../../Components/EventHeader";
import Footer from "../../Components/Footer";
import ChainReactionChase from "../../Events/ChainReactionChase";
const ChainReactionChaseLayout = () => {
  return (
    <div>
      <EventHeader></EventHeader>
      <ChainReactionChase></ChainReactionChase>
      <Footer></Footer>
    </div>
  );
};

export default ChainReactionChaseLayout;
