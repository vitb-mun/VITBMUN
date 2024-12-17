import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "../src/Layout/Layout";
import TechTeamLayout from "./Layout/TeamLayout/TechTeamLayout";
import ContentTeamLayout from "./Layout/TeamLayout/ContentTeamLayout";
import SecretariatTeamLayout from "./Layout/TeamLayout/SecretariatTeamLayout";
import DesignTeamLayout from "./Layout/TeamLayout/DesignTeamLayout";
import PRTeamLayout from "./Layout/TeamLayout/PRTeamLayout";
import PhotographyTeamLayout from "./Layout/TeamLayout/PhotographyTeamLayout";
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
        <Routes>
          <Route
            path="/TechTeam"
            element={<TechTeamLayout></TechTeamLayout>}
          ></Route>
          <Route
            path="/ContentTeam"
            element={<ContentTeamLayout></ContentTeamLayout>}
          ></Route>
          <Route
            path="/SecretariatTeam"
            element={<SecretariatTeamLayout></SecretariatTeamLayout>}
          ></Route>
          <Route
            path="/DesignTeam"
            element={<DesignTeamLayout></DesignTeamLayout>}
          ></Route>
          <Route path="/PRTeam" element={<PRTeamLayout></PRTeamLayout>}></Route>
          <Route
            path="/PhotographyTeam"
            element={<PhotographyTeamLayout></PhotographyTeamLayout>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
