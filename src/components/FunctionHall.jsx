import { Link } from "react-scroll";
export default function FunctionHall() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Function Hall</h2>
        <p className="text-gray-700 mb-6">
          Host your special events in our fully-equipped hall with 300–400 people capacity. 
          Perfect for weddings, corporate events, and celebrations with pure veg catering.
        </p>
        <img src="https://images.venuebookingz.com/30331-1694681419-wm-fun-lantis-banquet-hall-1.jpg" alt="Function Hall" className="mx-auto rounded-lg shadow-lg h-64 object-cover" />
        <Link to="booking" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">
        <button className="mt-4 bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Book Hall</button>
        </Link>
      </div>
    </section>
  );
}