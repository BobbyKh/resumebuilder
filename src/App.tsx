import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Login from "./auth/login";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ResumeBuild from "./resume/ResumeBuild";
import Experience from "./resume/Experience";
import BuildForm from "./resume/BuildForm";
import Template from "./resume/Template";
import BookAppointment from "./pages/BookAppointment";
import BaseApp from "./app/BaseApp";
import Pricing from "./pages/Pricing";
import Checkout from "./payment/Checkout";
import Pdftotext from "./resume/Pdftotext";
import NotFound from "./pages/NotFound";




const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
    <Route
      path="*"
      element={
        <>
          <div className="min-h-screen flex flex-col justify-center items-center">
            <NotFound />
          </div>
        </>
      }
    />
      <Route path="/app" element={<BaseApp />} />
      <Route path="/pricing/suscribe/:id" element={<Checkout />} />
      <Route path="/resume/:id" element={<BuildForm />} />
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resumebuild" element={<ResumeBuild />} />
      <Route path="*" element={<Landing />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/buildresume" element={<BuildForm />} />
      <Route path="/template" element={<Template />} />
      <Route path="/bookappointment" element={<BookAppointment />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path ="/pdftotext" element={<Pdftotext />} />
    </Routes>
    <Footer></Footer>
  </div>
);

export default App;
