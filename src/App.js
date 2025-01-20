import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home/Home";
import SuspenseLoader from "./components/Interfaces/SuspenseLoader/SuspenseLoader";

// import Details from "./screens/Details/Details";
// import Login from "./screens/Auth/Login/LogIn";
// import SignUp from "./screens/Auth/SignUp/SignUp";
// import Searched from "./screens/Searched/Searched";
// import Cart from "./screens/Cart/Cart";
import ErrorPage from "./screens/ErrorPage/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { initTheme, onIsValidAge } from "./store/ui/uiActions";
import ScrollToTop from "./components/Utility/ScrollTop/ScrollTop";

const About = React.lazy(() => import("./screens/About/About"));
const Contact = React.lazy(() => import("./screens/Contact/Contact"));

// import About from "./screens/About/About";
// import Contact from "./screens/Contact/Contact";

// import Comments from "./screens/Details/CommentLayout/Comments/Comments";
// import UserComment from "./screens/Details/CommentLayout/UserComment/UserComment";
// import Faq from "./screens/FAQ/Faq";
// import Checkout from "./screens/Checkout/Checkout";
// import ProductsStore from "./screens/ProductsStore/ProductsStore";

const TermsAndConditions = React.lazy(() =>
  import("./screens/TermsAndConditions/TermsAndConditions")
);
const PrivacyPolicy = React.lazy(() =>
  import("./screens/PrivacyPolicy/PrivacyPolicy")
);

// import TermsAndConditions from "./screens/TermsAndConditions/TermsAndConditions";
// import PrivacyPolicy from "./screens/PrivacyPolicy/PrivacyPolicy";

// ===================================================================================
// import ForgotPassword from "./screens/Auth/ForgotPassword/ForgotPassword";
// import ResetPassword from "./screens/Auth/ResetPassword/ResetPassword";
// import Profile from "./screens/Auth/Profile/Profile";
// import Orders from "./screens/Orders/Orders";
// ======================================================================================

const StructuralWork = React.lazy(() =>
  import(
    "./screens/Services/EngineeringAndDesigns/StructuralWork/StructuralWork"
  )
);
const Plumbing = React.lazy(() =>
  import("./screens/Services/EngineeringAndDesigns/Plumbing/Plumbing")
);
const DieselAndLubricantSupply = React.lazy(() =>
  import(
    "./screens/Services/Procurement/DieselAndLubricantSupply/DieselAndLubricantSupply"
  )
);
const OffsureSupply = React.lazy(() =>
  import("./screens/Services/Procurement/OffsureSupply/OffsureSupply")
);
const PiplineFabricationAndInstallation = React.lazy(() =>
  import(
    "./screens/Services/Fabrication/PipelineFabricationAndInstallation/PipelineFabricationAndInstallation"
  )
);
const PortaCabin = React.lazy(() =>
  import("./screens/Services/Fabrication/PortaCabin/PortaCabin")
);
const StockPiling = React.lazy(() =>
  import("./screens/Services/Construction/StockPiling/StockPiling")
);
const ConstructionAndFabrication = React.lazy(() =>
  import(
    "./screens/Services/Fabrication/ConstructionAndFabrication/ConstructionAndFabrication"
  )
);
const Digitalization = React.lazy(() =>
  import("./screens/Home/Interest/Digitalization/Digitalization")
);
const RemoteMonitoring = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/RemoteMonitoring/RemoteMonitoring"
  )
);

const SustainabilityTracking = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/SustainabilityTracking/SustainabilityTracking"
  )
);
const AI = React.lazy(() =>
  import("./screens/Home/Interest/Digitalization/AI/AI")
);
const AutomationAndIoT = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/AutomationAndIoT/AutomationAndIoT"
  )
);
const ARVR = React.lazy(() =>
  import("./screens/Home/Interest/Digitalization/ARVR/ARVR")
);
const SupplyChainOptimization = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/SupplyChainOptimization/SupplyChainOptimization"
  )
);
const EnhancedServiceDelivery = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/EnhancedServiceDelivery/EnhancedServiceDelivery"
  )
);
const EnergyTransitionSupport = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/EnergyTransitionSupport/EnergyTransitionSupport"
  )
);
const DesignEngineering = React.lazy(() =>
  import("./screens/Home/Interest/DesignEngineering/DesignEngineering")
);
const HelpLine = React.lazy(() =>
  import("./screens/Home/Interest/HelpLine/HelpLine")
);
const OurValues = React.lazy(() =>
  import("./screens/Home/Interest/HelpLine/OurValues/OurValues")
);
const CareerAtArkhos = React.lazy(() =>
  import("./screens/Home/Interest/CareerAtArkhos/CareerAtArkhos")
);
const CodeEthics = React.lazy(() =>
  import("./screens/Home/Interest/HelpLine/CodeEthics/CodeEthics")
);
const SandblastinAndPainting = React.lazy(() =>
  import(
    "./screens/Services/Maintenance/SandblastinAndPainting/SandblastinAndPainting"
  )
);
const Logistics = React.lazy(() =>
  import("./screens/Services/LogisticsAndMarineServices/Logistics/Logistics")
);
const PlatformSupplyVessels = React.lazy(() =>
  import(
    "./screens/Services/LogisticsAndMarineServices/PlatformSupplyVessels/PlatformSupplyVessels"
  )
);
const Crewboat = React.lazy(() =>
  import("./screens/Services/LogisticsAndMarineServices/Crewboat/Crewboat")
);
const PortfolioAndProject = React.lazy(() =>
  import("./screens/Home/Interest/PortfolioAndProject/PortfolioAndProject")
);
const Sustanability = React.lazy(() =>
  import("./screens/Home/Sustanability/Sustanability")
);
const Support = React.lazy(() => import("./screens/Support/Support"));
const ReportBug = React.lazy(() => import("./screens/ReportBug/ReportBug"));
const Blockchain = React.lazy(() =>
  import("./screens/Home/Interest/Digitalization/Blockchain/Blockchain")
);
const Collaboration = React.lazy(() =>
  import(
    "./screens/Home/Interest/Digitalization/CollaborationAndOpenInnovation/RemoteMonitoring"
  )
);

// import StructuralWork from "./screens/Services/EngineeringAndDesigns/StructuralWork/StructuralWork";
// import Plumbing from "./screens/Services/EngineeringAndDesigns/Plumbing/Plumbing";
// import DieselAndLubricantSupply from "./screens/Services/Procurement/DieselAndLubricantSupply/DieselAndLubricantSupply";
// import OffsureSupply from "./screens/Services/Procurement/OffsureSupply/OffsureSupply";
// import PiplineFabricationAndInstallation from "./screens/Services/Fabrication/PipelineFabricationAndInstallation/PipelineFabricationAndInstallation";
// import PortaCabin from "./screens/Services/Fabrication/PortaCabin/PortaCabin";
// import StockPiling from "./screens/Services/Construction/StockPiling/StockPiling";
// import ConstructionAndFabrication from "./screens/Services/Fabrication/ConstructionAndFabrication/ConstructionAndFabrication";
// import Digitalization from "./screens/Home/Interest/Digitalization/Digitalization";
// import RemoteMonitoring from "./screens/Home/Interest/Digitalization/RemoteMonitoring/RemoteMonitoring";

// import SustainabilityTracking from "./screens/Home/Interest/Digitalization/SustainabilityTracking/SustainabilityTracking";
// import AI from "./screens/Home/Interest/Digitalization/AI/AI";
// import AutomationAndIoT from "./screens/Home/Interest/Digitalization/AutomationAndIoT/AutomationAndIoT";
// import ARVR from "./screens/Home/Interest/Digitalization/ARVR/ARVR";
// import SupplyChainOptimization from "./screens/Home/Interest/Digitalization/SupplyChainOptimization/SupplyChainOptimization";
// import EnhancedServiceDelivery from "./screens/Home/Interest/Digitalization/EnhancedServiceDelivery/EnhancedServiceDelivery";
// import EnergyTransitionSupport from "./screens/Home/Interest/Digitalization/EnergyTransitionSupport/EnergyTransitionSupport";
// import DesignEngineering from "./screens/Home/Interest/DesignEngineering/DesignEngineering";
// import HelpLine from "./screens/Home/Interest/HelpLine/HelpLine";
// import OurValues from "./screens/Home/Interest/HelpLine/OurValues/OurValues";
// import CareerAtArkhos from "./screens/Home/Interest/CareerAtArkhos/CareerAtArkhos";
// import CodeEthics from "./screens/Home/Interest/HelpLine/CodeEthics/CodeEthics";
// import SandblastinAndPainting from "./screens/Services/Maintenance/SandblastinAndPainting/SandblastinAndPainting";
// import Logistics from "./screens/Services/LogisticsAndMarineServices/Logistics/Logistics";
// import PlatformSupplyVessels from "./screens/Services/LogisticsAndMarineServices/PlatformSupplyVessels/PlatformSupplyVessels";
// import Crewboat from "./screens/Services/LogisticsAndMarineServices/Crewboat/Crewboat";
// import PortfolioAndProject from "./screens/Home/Interest/PortfolioAndProject/PortfolioAndProject";
// import Sustanability from "./screens/Home/Sustanability/Sustanability";
// import Support from "./screens/Support/Support";
// import ReportBug from "./screens/ReportBug/ReportBug";
// import Blockchain from "./screens/Home/Interest/Digitalization/Blockchain/Blockchain";
// import Collaboration from "./screens/Home/Interest/Digitalization/CollaborationAndOpenInnovation/RemoteMonitoring";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const selectedTheme = localStorage.getItem("Theme");

  if (preference && !selectedTheme) dispatch(initTheme("dark"));

  const userConsent = localStorage.getItem("userConsent");
  if (userConsent === "true");

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout theme={theme} />}>
        <Route index element={<Home />} />
        {/* <Suspense fallback={<SuspenseLoader theme={theme} />}> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/report-bug" element={<ReportBug />} />

        <Route path="/structural-work" element={<StructuralWork />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/d-l-s" element={<DieselAndLubricantSupply />} />
        <Route path="/offsure-supply" element={<OffsureSupply />} />
        <Route
          path="/pipeline-fabrication-nstallation"
          element={<PiplineFabricationAndInstallation />}
        />
        <Route
          path="/Construction-fabrication"
          element={<ConstructionAndFabrication />}
        />
        <Route path="/porta-cabin" element={<PortaCabin />} />
        <Route path="/stockpiling" element={<StockPiling />} />
        <Route
          path="/sandblasting-and-painting"
          element={<SandblastinAndPainting />}
        />
        <Route path="/logistics" element={<Logistics />} />
        <Route
          path="/platform-supply-vessls"
          element={<PlatformSupplyVessels />}
        />
        <Route path="/crewboat" element={<Crewboat />} />

        <Route path="/digitalization" element={<Digitalization />} />
        <Route path="/remote-monitoring" element={<RemoteMonitoring />} />
        <Route
          path="/sustainability-tracking"
          element={<SustainabilityTracking />}
        />
        <Route
          path="/collaboration-and-open-innovation"
          element={<Collaboration />}
        />
        <Route path="/a-i" element={<AI />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/automation-and-iot" element={<AutomationAndIoT />} />
        <Route path="/ar-vr" element={<ARVR />} />
        <Route
          path="/supply-chain-optimization"
          element={<SupplyChainOptimization />}
        />
        <Route
          path="/enhanced-service-delivery"
          element={<EnhancedServiceDelivery />}
        />
        <Route
          path="/energy-transition-support"
          element={<EnergyTransitionSupport />}
        />

        <Route
          path="/portfolio-and-projects"
          element={<PortfolioAndProject />}
        />
        <Route path="/design-engineering" element={<DesignEngineering />} />
        {/* <Route path="/design-engineering" element={< > design-engineering</>} /> */}

        <Route path="/helpline" element={<HelpLine />} />
        <Route path="/our-values" element={<OurValues />} />
        <Route path="/code-ethics" element={<CodeEthics />} />

        <Route path="/career-at-arkhos" element={<CareerAtArkhos />} />

        <Route path="/projects" element={<PortfolioAndProject />} />
        <Route path="/sustanability" element={<Sustanability />} />

        {/* <Route path="comments" element={<Comments />} />
        <Route path="user-comment" element={<UserComment />} />
        <Route path="/searched/:prodId" element={<Searched />} /> 

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />

         <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/reset" element={<ResetPassword />} /> */}

        <Route path="*" element={<ErrorPage />} />
        {/* </Suspense> */}
      </Route>
    </Routes>
    </>
  );
}

export default App;
//₦
