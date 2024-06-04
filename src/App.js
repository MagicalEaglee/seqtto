import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Nav from "./Components/Nav";
import Web from "./Pages/Web";
import SerDetails from "./Components/Services/SerDetails";
import Footer from "./Components/Footer";
import WebDev from "./Pages/Spages/Web/WebDev";
import JavaWeb from "./Pages/Spages/Web/JavaWeb";
import ReactWeb from "./Pages/Spages/Web/ReactWeb";
import NodeWeb from "./Pages/Spages/Web/NodeWeb";
import PythonWeb from "./Pages/Spages/Web/PythonWeb";
import Java from "./Pages/Spages/Java/Java";
import Python from "./Pages/Spages/Python/Python";
import Digital from "./Pages/Spages/Digital/Digital";
import Seo from "./Pages/Spages/Digital/Seo";
import Pay from "./Pages/Spages/Digital/Pay";
import Social from "./Pages/Spages/Digital/Social";
import Analytics from "./Pages/Spages/Digital/Analytics";
import Content from "./Pages/Spages/Digital/Content";
import Php from "./Pages/Spages/Php/Php";
import Node from "./Pages/Spages/Node/Node";
import Dot from "./Pages/Spages/Dot/Dot";
import Mobile from "./Pages/Spages/Mobile.jsx/Mobile";
import Flutter from "./Pages/Spages/Mobile.jsx/Flutter";
import Hybrid from "./Pages/Spages/Mobile.jsx/Hybrid";
import Pwa from "./Pages/Spages/Mobile.jsx/Pwa";
import Los from "./Pages/Spages/Mobile.jsx/Los"
import Android from "./Pages/Spages/Mobile.jsx/Android"
import ReactNative from "./Pages/Spages/Mobile.jsx/ReactNative"
import Xamarin from "./Pages/Spages/Mobile.jsx/Xamarin"
import MobileWeb from "./Pages/Spages/Mobile.jsx/MobileWeb"
import Cross from "./Pages/Spages/Mobile.jsx/Cross"
import Devops from "./Pages/Spages/Devops/Devops";
import Cyber from "./Pages/Spages/Cyber/Cyber";
import NotFound from "./Pages/NotFound";
import Privacy from "./Pages/Privacy";
import Leagal from "./Pages/Leagal";
import Testing from "./Pages/Spages/Testing/Testing";
import Fraud from "./Pages/Spages/Fruad/Fraud";
import Bpo from "./Pages/Spages/BPO/Bpo";
import Terms from "./Pages/Spages/Policy/Terms"
import Eula from "./Pages/Spages/Policy/Eula"
import Cookie from "./Pages/Spages/Policy/Cookie"
import Staffing from "./Pages/Spages/Staffing/Staffing"
import Login from "./Pages/Login";
import Dash from "./Pages/Dash";
import Poster from "./Components/Dash/Poster";
import News from "./Components/Dash/News";


function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route  path="Services" element={<Services/>}>
        <Route path="WebDev" element={<SerDetails name="Web"/>}/>
        <Route path="Mobile" element={<SerDetails name="Mobile"/>}/>
        <Route path="Php" element={<SerDetails name="PHP"/>}/>
        <Route path="Python" element={<SerDetails name="Python"/>}/>
        <Route path="Java" element={<SerDetails name="Java App"/>}/>
        <Route path="DotNET" element={<SerDetails name="DOT NET"/>}/>
        <Route path="Cyber" element={<SerDetails name="Cyber"/>}/>
        <Route path="Digital" element={<SerDetails name="Digital"/>}/>
        <Route path="testing" element={<SerDetails name="Testing"/>}/>
        <Route path="Devops" element={<SerDetails name="Devops"/>}/>
      </Route>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Services/WebDevelopment" element={<WebDev/>}>
      <Route path="JavaD" element={<JavaWeb/>}/>
      <Route path="ReactJs" element={<ReactWeb/>}/>
      <Route path="NodeJs" element={<NodeWeb/>}/>
      <Route path="PythonWeb" element={<PythonWeb/>}/>
      </Route>
        <Route path="Services/MobileDevelopment" element={<Mobile/>}>
          <Route path="Ios" element={<Los/>}/>
          <Route path="Android" element={<Android/>}/>
          <Route path="PWA" element={<Pwa/>}/>
          <Route path="ReactNative" element={<ReactNative/>}/>
          <Route path="MobileWeb" element={<MobileWeb/>}/>
          <Route path="Flutter" element={<Flutter/>}/>
          <Route path="Cross" element={<Cross/>}/>
          <Route path="Xamarin" element={<Xamarin/>}/>
          <Route path="Hybrid" element={<Hybrid/>}/>
        </Route>
        <Route path="Services/PhpDevelopment" element={<Php/>}/>
        <Route path="Services/JavaDevelopment" element={<Java/>}/>
        <Route path="Services/NodeDevelopment" element={<Node/>}/>
        <Route path="Services/DotnetDevelopment" element={<Dot/>}/>
        <Route path="Services/DigitalMarketing" element={<Digital/>}>
          <Route path="Seo" element={<Seo name="seo"/>}/>
          <Route path="Pay" element={<Pay/>}/>
          <Route path="Social" element={<Social/>}/>
          <Route path="Analytics" element={<Analytics/>}/>
          <Route path="Content" element={<Content/>}/>
          <Route path="Email" element={<Seo name="Email"/>}/>
        </Route>
        <Route path="Services/CyberSecurity" element={<Cyber/>}/>
        <Route path="Services/Dev" element={<Devops/>}/>
        <Route path="Services/T" element={<Testing/>}/>s
        <Route path="Services/PythonDevelopment" element={<Python/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="Terms&Conditions" element={<Terms/>}/>
        <Route path="Privacy&Policy" element={<Leagal/>}/>
        <Route path="EulaPolicy" element={<Eula/>}/>
        <Route path="CookiePolicy" element={<Cookie/>}/>
        <Route path="Services/FraudInvestigation" element={<Fraud/>}/>
        <Route path="Services/Bpo" element={<Bpo/>}/>
        <Route path="Services/Staffing" element={<Staffing/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="DashBoard" element={<Dash/>}>
          <Route path="Poster" element={<Poster/>}/>
          <Route path="News" element={<News/>}/>
        </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
