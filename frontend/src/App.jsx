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
import Team_detail_view from "./Components/team_detail_view";

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
        <Routes>
          <Route
            path="/TechTeam"
            element={<Team_detail_view team_id={0}></Team_detail_view>}
          ></Route>
          <Route
            path="/ContentTeam"
            element={<Team_detail_view team_id={1}></Team_detail_view>}
          ></Route>
          <Route
            path="/DesignTeam"
            element={<Team_detail_view team_id={2}></Team_detail_view>}
          ></Route>
          <Route
            path="/PRTeam"
            element={<Team_detail_view team_id={3}></Team_detail_view>}
          ></Route>
          <Route
            path="/SecretariatTeam"
            element={<Team_detail_view team_id={4}></Team_detail_view>}
          ></Route>
          <Route
            path="/PhotographyTeam"
            element={<Team_detail_view team_id={5}></Team_detail_view>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
