import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
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
import CVtemplate from "./cvsection/CVtemplate";
import BioDataTemplate from "./biodatasection/BioDataTemplate";
import CoverTemplate from "./coverlettersection/CoverTemplate";
import DocumentCategory from "./pages/DocumentCategory";
import GenerateResume from "./resume/GenerateResume";
import Loader from "./components/Loader";
import Faq from "./pages/Faq";
import ResumeEditor from "./resume/ResumeEditor";
import AuthPage  from "./auth/AuthPage";
import { useAuthentication } from "./auth/Auth";
import RedirectGoogleAuth from "./auth/GoogleRedirectHandler";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {isAuthorized} = useAuthentication();
  const  ProtectedLogin = () => isAuthorized ? <Navigate to="/app" /> : <Login />

  const ProtectedRegister = () => isAuthorized ? <Navigate to="/app" /> : <AuthPage initialMethod="register" />



  useEffect(() => {
    const fakeDataFetch = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate a 1-second delay
    };
    fakeDataFetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="">
          <Loader />
        </div>
      ) : (
        <div className="App bg-[#0b1320]">
          <Navbar />
          <Routes>
            <Route
              path="*"
              element={
                <div className="min-h-screen flex flex-col justify-center items-center">
                  <NotFound />
                </div>
              }
            />
            <Route path="/login/google/callback" element={<RedirectGoogleAuth />}></Route>
            <Route path="/app" element={<BaseApp />} />
            <Route path="/register" element={<AuthPage initialMethod="register" />} />
            <Route path="/login" element={<AuthPage initialMethod="login" />} />
            <Route path="/documentcategory" element={<DocumentCategory />} />
            <Route path="/pricing/subscribe/:id" element={<Checkout />} />
            <Route path="/resume/editor/:templateId" element={<BuildForm />} />
            <Route path="/resume/editor/:templateId/:id" element={<ResumeEditor />} />
            <Route path="/cv" element={<CVtemplate />} />
            <Route path="/category/:id" element={<CoverTemplate />} />
            <Route path="/biodata" element={<BioDataTemplate />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<ProtectedLogin />} />
            <Route path="/register" element={<ProtectedRegister />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resumebuild" element={<ResumeBuild />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/buildresume" element={<BuildForm />} />
            <Route path="/template/:id" element={<Template />} />
            <Route path="/appointment" element={<BookAppointment />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pdftotext" element={<Pdftotext />} />
            <Route path="/generateresume/:templateId" element={<GenerateResume />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
