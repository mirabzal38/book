import React, { useState } from "react";

function Home() {
  const [fromInp, setFromInp] = useState("");
  const [toInp, setToInp] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  const handleBooking = () => {
    const message = `Salom, siz ${fromInp} dan ${toInp} ga ${departureDate} kundan ${returnDate} kungacha bilet sotib oldingiz`;
    setBookingMessage(message);
  };

  const handleFromInputChange = (event) => {
    setFromInp(event.target.value);
  };

  const handleToInputChange = (event) => {
    setToInp(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  return (
    <div className='flex p-6 gap-6 bg-slate-600'>
      <input className="p-3 rounded-xl" type="text" placeholder="From ?" value={fromInp} onChange={handleFromInputChange} />
      <input className="p-3 rounded-xl" type="text" placeholder="To ?" value={toInp} onChange={handleToInputChange} />
      <input type="date" value={departureDate} onChange={handleDepartureDateChange} />
      <input type="date" value={returnDate} onChange={handleReturnDateChange} />
      <button className="bg-blue-500 p-4 rounded-2xl" onClick={handleBooking}>book</button>
      <h1>{bookingMessage}</h1>
    </div>
  );
}

export default Home;
