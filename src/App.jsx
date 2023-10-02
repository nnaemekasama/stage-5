import React from "react"
import Navbar from "./containers/Navbar"
import Landing from "./pages/Landing"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import Footer from "./containers/Footer"
import VideoRecording from "./pages/VideoRecording"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/video" element={<VideoRecording />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
