import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

// 1. CRITICAL COMPONENT (Loaded immediately)
import Home from "./Component/Home";

// 2. LAZY LOADED COMPONENTS (Downloaded only when needed)
const Speciality = lazy(() => import("./Component/Speciality"));
const FindDoctor = lazy(() => import("./Component/FindDoctor"));
const PageNotFound = lazy(() => import("./Component/PageNotFound"));
const ContactUS = lazy(() => import("./Component/ContactUs"));
const AboutUS = lazy(() => import("./Component/AboutUs"));
const BlogsandNews = lazy(() => import("./Component/BlogsandNews"));
const RenderBlogs = lazy(() => import("./Component/RenderBlogs"));

// Doctor Profiles (Lazy loaded to break the chain)
const DrPrashantSharma = lazy(() => import("./Component/Profile/DrPrashantSharma"));
const DrSatyaPrakash = lazy(() => import("./Component/Profile/DrSatyaPrakash"));
const DrSethiGupta = lazy(() => import("./Component/Profile/DrSethiGupta"));
const DrSaloniSeth = lazy(() => import("./Component/Profile/DrSaloniSeth"));
const DrSachinKumar = lazy(() => import("./Component/Profile/DrSachinKumar"));
const DrAnvitunAggarwal = lazy(() => import("./Component/Profile/DrAnvitunAggarwal"));
const DrRajnishKashyap = lazy(() => import("./Component/Profile/DrRajnishKashyap"));
const DrRajanSareen = lazy(() => import("./Component/Profile/DrRajanSareen"));
const DrAbhishekAggarwal = lazy(() => import("./Component/Profile/DrAbhishekAggarwal"));
const DrRahulRamteke = lazy(() => import("./Component/Profile/DrRahulRamteke"));
const RenderProfile = lazy(() => import("./Component/Profile/RenderProfile"));

function App() {
  return (
    <>
      <Navbar />
      {/* 3. SUSPENSE: This shows a tiny "blank" space or a loader 
             while the specific page chunks are being downloaded */}
      <Suspense fallback={<div style={{ height: '100vh', backgroundColor: '#ffffff' }}></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/find_a_doctor" element={<FindDoctor />} />
          <Route path="/contactUs" element={<ContactUS />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/Blogs_and_News" element={<BlogsandNews />} />
          <Route path="/renderblogs" element={<RenderBlogs />} />
          
          
          {/* Profiles */}
          <Route path="/profile/dr-prashant-sharma" element={<DrPrashantSharma />} />
          <Route path="/profile/dr-satya-prakash" element={<DrSatyaPrakash />} />
          <Route path="/profile/dr-sethi-gupta" element={<DrSethiGupta />} />
          <Route path="/profile/dr-saloni-seth" element={<DrSaloniSeth />} />
          <Route path="/profile/dr-sachin-kumar" element={<DrSachinKumar />} />
          <Route path="/profile/dr-anvitun-aggarwal" element={<DrAnvitunAggarwal />} />
          <Route path="/profile/dr-rajnish-kashyap" element={<DrRajnishKashyap />} />
          <Route path="/profile/dr-rajan-sareen" element={<DrRajanSareen />} />
          <Route path="/profile/dr-abhishek-aggarwal" element={<DrAbhishekAggarwal />} />
          <Route path="/profile/dr-rahul-ramteke" element={<DrRahulRamteke />} />
          <Route path="/profile/Render_Profile" element={<RenderProfile />} />
          
          
          {/* Catch-all route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;