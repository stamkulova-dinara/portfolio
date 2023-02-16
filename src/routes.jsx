import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Experience />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
