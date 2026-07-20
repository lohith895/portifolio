import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/common/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails/ProjectDetails"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
