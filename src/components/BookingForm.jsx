export default function BookingForm() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Stay or Event</h2>
      <form className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md grid gap-4">
        <input type="text" placeholder="Full Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email Address" className="p-3 border rounded" />
        <input type="tel" placeholder="Phone Number" className="p-3 border rounded" />
        <div className="grid grid-cols-2 gap-4">
          <input type="date" className="p-3 border rounded" />
          <input type="date" className="p-3 border rounded" />
        </div>
        <select className="p-3 border rounded">
          <option>Room Booking</option>
          <option>Function Hall Booking</option>
        </select>
        <button className="bg-yellow-500 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Submit Booking</button>
      </form>
    </section>
  );
}