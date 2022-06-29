import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { ClipLoader, MoonLoader, BeatLoader } from "react-spinners";
import { useGlobalContext } from "./Contexts/GlobalContext";
import classNames from "classnames";
import Signup from "./Pages/StudentSignUp";
import ErrorModal from "./Components/ErrorModal";
import OTP from "./Pages/OTP";
import ChangeNumberDialog from "./Components/ChangeNumberDialog";
import ExperienceForm from "./Components/ExperienceForm";
import Experience from "./Pages/StudentProfile/Experience";
import Preferences from "./Pages/StudentProfile/Preferencecs";
import Academics from "./Pages/StudentProfile/Academics";
import { JSONTree } from "react-json-tree";

const Info = () => {
   const [data, setData] = useState();
   useEffect(() => {
      fetch("https://api.upscwork.com/candidate/profile", {
         headers: { Authorization: `Bearer ${localStorage.getItem("auth-token")}` },
      })
         .then((res) => res.json())
         .then((data) => setData(data));
   }, []);
   return (
      <div className="text-4xl">
         <JSONTree data={data || {}}></JSONTree>
      </div>
   );
};

function App() {
   const [state, dispatch] = useGlobalContext();
   return (
      <BrowserRouter>
         <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <BeatLoader color={"rgba(64, 123, 255, 1)"} loading={state.loading} size={30}></BeatLoader>
         </div>
         <div className={classNames("w-full h-full", { blur: state.loading })}>
            <ErrorModal></ErrorModal>
            <Routes>
               <Route path="/" element={<Home></Home>}></Route>
               <Route path="/login" element={<Login></Login>}></Route>
               <Route path="/student/signup" element={<Signup></Signup>}></Route>
               <Route path="/otp" element={<OTP></OTP>}></Route>
               <Route path="/experience" element={<Experience></Experience>}></Route>
               <Route path="/preferences" element={<Preferences></Preferences>}></Route>
               <Route path="/academics" element={<Academics></Academics>}></Route>
               <Route path="/info" element={<Info></Info>}></Route>
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
