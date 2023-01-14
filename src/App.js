import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

const App = () => {
  const {
    theme: { theme },
  } = useSelector((s) => s);

  return (
    <div className={theme}>
      <div className="flex-1 w-full  dark:text-white dark:bg-zinc-800 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
