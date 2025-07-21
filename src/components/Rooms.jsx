import { Link } from "react-scroll";

const rooms = [
  { name: "Deluxe Room", price: "₹2000/night", img: "/public/img/room.jpeg" },
  { name: "Suite Room", price: "₹3500/night", img: "/public/img/room.jpeg" },
  { name: "Family Room", price: "₹4500/night", img: "/public/img/room.jpeg" },
];

export default function Rooms() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Rooms</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-600">{room.price}</p>
              <Link to="booking" smooth={true} offset={-70} className="cursor-pointer hover:text-yellow-400">
               <button className="mt-3 bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}