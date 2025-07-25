import React from 'react'

function TableForm() {
  return (
   <section className="py-12 mt-6" id='table'>
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Stay or Event</h2>
      <form className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md grid gap-4">
        <input type="text" placeholder="Full Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email Address" className="p-3 border rounded" />
        <input type="tel" placeholder="Phone Number" className="p-3 border rounded" />
        <div className="grid grid-cols-2 gap-4">
          <input type="date" className="p-3 border rounded" />
          <input type="time" className="p-3 border rounded" />
        </div>
        <select className="p-3 border rounded">
          <option value="">Select Table Type</option>
          <option>Roof-top Table</option>
          <option>Table for 2</option>
          <option>Table for 4</option>
          <option>Table for 6</option>
          <option>Table for 8</option>
        </select>
        <button className="bg-yellow-500 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Submit Booking</button>
      </form>
    </section>
  )
}

export default TableForm
