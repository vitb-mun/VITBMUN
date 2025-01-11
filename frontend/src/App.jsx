import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "../src/Layout/Layout";
import MUNMATELayout from "./Layout/EventLayout/MUNMATELayout";
import VITBMUNLayout from "./Layout/EventLayout/VITBMUNLayout";
import RajneetiRangmanchLayout from "./Layout/EventLayout/RajneetiRangmanchLayout";
import ChainReactionChaseLayout from "./Layout/EventLayout/ChainReactionChaseLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
        </Routes>
        <Routes>
          <Route
            path="/MUN-MATE"
            element={<MUNMATELayout></MUNMATELayout>}
          ></Route>
          <Route
            path="/VITBMUN"
            element={<VITBMUNLayout></VITBMUNLayout>}
          ></Route>
          <Route
            path="/RajneetiRangmanch"
            element={<RajneetiRangmanchLayout></RajneetiRangmanchLayout>}
          ></Route>
          <Route
            path="/ChainReactionChase"
            element={<ChainReactionChaseLayout></ChainReactionChaseLayout>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
