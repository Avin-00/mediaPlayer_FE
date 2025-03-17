import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import WatchHistory from "./pages/WatchHistory"



function App() {


  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<LandingPage />} />{/* self closing tag */}
        <Route path="/home" element={<Home />} />{/* self closing tag */}
        <Route path="/watch" element={<WatchHistory />} />{/* self closing tag */}
        
      </Routes>



      <Footer />
    </>
  )
}

export default App
