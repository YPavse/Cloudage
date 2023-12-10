import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Text from "./components/Text/Text";
import User from "./components/User/User";
import User2 from "./components/User2/User2";
import Navigation from "./components/Navigation/Navigation";
import Faqs from "./components/Faqs/Faqs";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Hero/>
      <Join />
      <Text/>
      <User/>
      <User2/>
      <Faqs/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;