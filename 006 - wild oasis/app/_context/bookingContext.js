"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

const initialDate = { from: null, to: null };

const BookingContextProvider = ({ children }) => {
  const [range, setRange] = useState(initialDate);

  function resetRange() {
    setRange(initialDate);
  }

  return (
    <BookingContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useGlobalBookingContext = () => {
  return useContext(BookingContext);
};

export default BookingContextProvider;
