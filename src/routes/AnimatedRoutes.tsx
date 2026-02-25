import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "@/pages/Home";
import { Teams } from "@/pages/Teams";
import { TeamDetail } from "@/pages/TeamDetail";
import { PlayerDetail } from "@/pages/PlayerDetail";
import { ManagerDetail } from "@/pages/ManagerDetail";
import { MatchDetail } from "@/pages/MatchDetail";
import { About } from "@/pages/About";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/players/:id" element={<PlayerDetail />} />
          <Route path="/managers/:id" element={<ManagerDetail />} />
          <Route path="/matches/:id" element={<MatchDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
