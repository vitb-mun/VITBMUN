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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
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
