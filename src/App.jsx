import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Rooms from "./components/Rooms";
import FunctionHall from "./components/FunctionHall";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Restaurant from "./views/Restaurant";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="rooms"><Rooms /></section>
      <section id="hall"><FunctionHall /></section>
      <section id="booking"><BookingForm /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;