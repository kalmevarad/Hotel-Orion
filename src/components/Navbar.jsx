import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold">R G Orion</h1>
        <div className="space-x-6 hidden md:flex">
          <Link to="hero" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">Home</Link>
          <Link to="about" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">About</Link>
          <Link to="rooms" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">Rooms</Link>
          <Link to="hall" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">Hall</Link>
          <Link to="booking" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">Booking</Link>
          <Link to="contact" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
