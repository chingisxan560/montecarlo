import React, { useState } from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import Rooms from "./Rooms";

export default function Home() {
  const [filters, setFilters] = useState({
    checkIn: "",
    checkOut: "",
    category: "",
    capacity: ""
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);  
  };

  return (
    <>
      <Carousel />
      <Book onFilterChange={handleFilterChange} />
      <Rooms filters={filters} />
    </>
  );
}
