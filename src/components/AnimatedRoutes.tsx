import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Teams from "@/pages/Teams";
import TeamDetail from "@/pages/TeamDetail";
import PlayerDetail from "@/pages/PlayerDetail";
import ManagerDetail from "@/pages/ManagerDetail";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default AnimatedRoutes;
