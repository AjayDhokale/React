import React from "react"
import Header from "./components/header"
import Home from "./components/Home"
import SuccessStories from "./components/SuccessStories"
import AllCourses from "./components/AllCourses"
import AllMission from "./components/AllMission"
import Contact from "./components/Contact"
import Reviews from "./components/Reviews"


// import Header from "./components/Header"


function App() {
  return (
    <>
       <Header />
       <hr />
     <Home />
     <hr />
      <SuccessStories /> 
      <hr />
      <AllCourses />
      <hr />
      <AllMission />
      <hr />
      <Reviews />
      <hr />
      <Contact />
      
    </>
  )
}

export default App
