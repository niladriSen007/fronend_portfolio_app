// import About from "./container/About/About";
// import Header from "./container/Header/Header";
// import Skills from "./container/Skills/Skills";
// import Testimonials from "./container/Testimonials/Testimonials";
// import Work from "./container/Work/Work";
// import Footer from "./container/Footer/Footer";

import {About,Header,Skills,Testimonials,Work,Footer} from "./container"
import {Navbar} from "./components"
import "./App.scss"
function App() {
  return (
   <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Testimonials />
    <Footer />
   </div>
  );
}

export default App;
