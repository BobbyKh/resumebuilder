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
import Profile from "./profile/Profile";
import Tutorial from "./tutorial/Tutorial";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {isAuthorized} = useAuthentication();
  const  ProtectedLogin = () => isAuthorized ? <Navigate to="/app" /> : <Login method="login" setMethod={() => {}} route="/login" />

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
            <Route path="/app" element={isAuthorized ? <BaseApp /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthorized ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/tutorial" element={isAuthorized ? <Tutorial /> : <Navigate to="/login" />} />
            <Route path="/register" element={<AuthPage initialMethod="register" />} />
            <Route path="/login" element={<AuthPage initialMethod="login" />} />
            <Route path="/documentcategory" element={isAuthorized ? <DocumentCategory /> : <Navigate to="/login" />} />
            <Route path="/pricing/subscribe/:id" element={isAuthorized ? <Checkout /> : <Navigate to="/login" />} />
            <Route path="/resume/editor/:templateId" element={isAuthorized ? <BuildForm /> : <Navigate to="/login" />} />
            <Route path="/resume/editor/:templateId/:id" element={isAuthorized ? <ResumeEditor /> : <Navigate to="/login" />} />
            <Route path="/cv" element={isAuthorized ? <CVtemplate /> : <Navigate to="/login" />} />
            <Route path="/category/:id" element={isAuthorized ? <CoverTemplate /> : <Navigate to="/login" />} />
            <Route path="/biodata" element={isAuthorized ? <BioDataTemplate /> : <Navigate to="/login" />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<ProtectedLogin />} />
            <Route path="/register" element={<ProtectedRegister />} />
            <Route path="/portfolio" element={isAuthorized ? <Portfolio /> : <Navigate to="/login" />} />
            <Route path="/contact" element={isAuthorized ? <Contact /> : <Navigate to="/login" />} />
            <Route path="/resumebuild" element={isAuthorized ? <ResumeBuild /> : <Navigate to="/login" />} />
            <Route path="/experience" element={isAuthorized ? <Experience /> : <Navigate to="/login" />} />
            <Route path="/buildresume" element={isAuthorized ? <BuildForm /> : <Navigate to="/login" />} />
            <Route path="/template/:id" element={isAuthorized ? <Template /> : <Navigate to="/login" />} />
            <Route path="/appointment" element={isAuthorized ? <BookAppointment /> : <Navigate to="/login" />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pdftotext" element={isAuthorized ? <Pdftotext /> : <Navigate to="/login" />} />
            <Route path="/generateresume/:templateId" element={isAuthorized ? <GenerateResume /> : <Navigate to="/login" />} />
            <Route path="/faq" element={<Faq />} />
            </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;

