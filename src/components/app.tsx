import { Box, Paned } from "adwaita-web";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ComponentDocViewPage } from "../pages/component-doc-view/component-doc-view";
import { ErrorPage } from "../pages/error-page/error-page";
import { HomePage } from "../pages/home/home";
import { githubRepo } from "../quarks/github-repo/github-repo";
import { applyProviders } from "./app-context-providers/providers";

import "./app.css";
import { Main } from "./main/main";
import { Sidebar } from "./sidebar/sidebar";

export function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    githubRepo.updateBranchList().catch((e) => {
      navigate("/error");
    });
  }, []);

  return applyProviders(
    <Box vertical compact className="App background">
      <Paned defaultSize={230} fill border="handle">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path=":componentName" element={<ComponentDocViewPage />} />
            <Route path="error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </Main>
      </Paned>
    </Box>
  );
}
