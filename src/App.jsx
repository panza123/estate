import Navbar from "./components/Navbar"
import About from "./layout/About"
import Home from "./layout/Home"
import Services from "./layout/Services"
import Review from "./layout/Review"
import ContactUs from "./layout/ContactUs"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
     <main > 
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Review/>
      <ContactUs/>
      <Footer/>
     </main>
    </>
  )
}

export default App
