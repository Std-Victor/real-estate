import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/Not-Found/NotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/Sign-up/SignUp.jsx";
import Modal from "./components/Modal/Modal.jsx";
import { toggleModal } from "./redux/guest/guest.slice.js";
import ComingSoon from "./pages/coming-soon/ComingSoon.jsx";

import "./App.scss";
function App() {
  const { openModal, modal, pageExists } = useSelector((state) => state.guest);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/property" element={<ComingSoon />} />
        <Route path="/blogs" element={<ComingSoon />} />
        <Route path="/contact-us" element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {pageExists && <Footer />}

      <Modal onClose={() => dispatch(toggleModal(modal))} open={openModal}>
        {modal === "login" ? <Login /> : <SignUp />}
      </Modal>
    </>
  );
}

export default App;
