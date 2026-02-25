import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Teams from "@/pages/Teams";
import TeamDetail from "@/pages/TeamDetail";
import PlayerDetail from "@/pages/PlayerDetail";
import ManagerDetail from "@/pages/ManagerDetail";
import MatchDetail from "@/pages/MatchDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/*
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/status' element={<Status />} />
            <Route path='/config' element={<Config />} />*/}
          <Route path="/" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/players/:id" element={<PlayerDetail />} />
          <Route path="/managers/:id" element={<ManagerDetail />} />
          <Route path="/matches/:id" element={<MatchDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default AnimatedRoutes;
