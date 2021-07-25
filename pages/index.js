import React, { useState, useEffect } from "react";
import Image from "next/image";
import { apartments } from "../database/data";
import FavoriteBtn from "../components/FavouriteButton";
export default function index() {
  const [apartmentsData, setApartmentsData] = useState(apartments);
  const [bedroomFilter, setBedroomFilter] = useState();
  const [rentFilter, setRentFilter] = useState();
  const [sizeFilter, setSizeFilter] = useState();
  useEffect(() => {
    //functions for "filter by rent"
    if (rentFilter) {
      const filters = rentFilter.split("-");
      let filteredApartments;
      if (filters[0].includes("+")) {
        filteredApartments = apartments.filter(
          (item) => item.rent >= parseInt(filters[0].replace("+", ""))
        );
      } else {
        filteredApartments = apartments.filter(
          (item) => item.rent >= filters[0] && item.rent <= filters[1]
        );
      }
      setApartmentsData(filteredApartments);
    }
  }, [rentFilter]);
  const handleFilterChange = (e) => {
    setRentFilter(e.target.value);
  };
  useEffect(() => {
    //functions for "filter by size"
    if (sizeFilter) {
      const filters = sizeFilter.split("-");
      let filteredApartments;
      if (filters[0].includes("+")) {
        filteredApartments = apartments.filter(
          (item) => item.size >= parseInt(filters[0].replace("+", ""))
        );
      } else {
        filteredApartments = apartments.filter(
          (item) => item.size >= filters[0] && item.size <= filters[1]
        );
      }
      setApartmentsData(filteredApartments);
    }
  }, [sizeFilter]);
  const handleSizeChange = (e) => {
    setSizeFilter(e.target.value);
  };
  useEffect(() => {
    //functions for "filter by bedroom"
    if (bedroomFilter) {
      const filters = bedroomFilter.split("-");
      let filteredApartments;
      if (filters[0].includes("+")) {
        filteredApartments = apartments.filter(
          (item) => item.bedroom >= parseInt(filters[0].replace("+", ""))
        );
      } else {
        filteredApartments = apartments.filter(
          (item) => item.bedroom >= filters[0] && item.bedroom <= filters[1]
        );
      }
      setApartmentsData(filteredApartments);
    }
  }, [bedroomFilter]);
  const handleBedroomChange = (e) => {
    setBedroomFilter(e.target.value);
  };
  return (
    <>
      <div className="h-full p-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ...">
        <h1 className="font-bold flex justify-center text-white text-3xl pb-8">
          Apartment🏠Finder
        </h1>

        <div className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ...">
          <span className="bg-indigo-800 text-white font-bold ml-4 py-3 px-10 rounded">
            Filter by rent:
          </span>
          <select
            onChange={handleFilterChange}
            className="py-2 px-4 mb-5 bg-white border-black border-4 "
          >
            <option>Choose Rent</option>
            <option value="1-500"> 500€ and below</option>
            <option value="501-800">501-800€</option>
            <option value="801-1200">801-1200€</option>
            <option value="+1201"> above 1200€</option>
          </select>
          <span className="bg-green-600 text-white font-bold ml-4 py-3 px-10 rounded">
            Filter by size:
          </span>
          <select
            onChange={handleSizeChange}
            className="py-2 px-4 mb-5 bg-white border-black border-4 "
          >
            <option>Choose Size</option>
            <option value="1-40">40 sqm and below</option>
            <option value="41-80">41-80 sqm</option>
            <option value="+81"> above 80 sqm</option>
          </select>
          <span className="bg-gray-300 text-black font-bold ml-4 py-3 px-10 rounded">
            Filter by bedroom:
          </span>
          <select
            onChange={handleBedroomChange}
            className="py-2  px-4 mb-5 bg-white border-black border-4 "
          >
            <option>Choose Bedrooms</option>
            <option value="1-2">1-2</option>
            <option value="3-5">3-5</option>
            <option value="+6">Above 5 </option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          {apartmentsData.map((data) => (
            <div className="h-full bg-white flex flex-col border-2 p-4 m-2">
              <Image
                src={data.picture}
                alt="picture of apartment"
                width={300}
                height={300}
              />
              <p className="font-bold mt-5">Monthly Rent : {data.rent}€</p>
              <p className="font-bold"> Size : {data.size} sqm</p>
              <p className="font-bold"> Location : {data.location}</p>
              <p className="font-bold"> Bedroom : {data.bedroom}</p>
              <FavoriteBtn />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-black mt-10">
          <p className="bg-gray-300 px-8 py-4 ">
            Made with ❤️ by Parizat Binta Kabir
            <br />
            Copyright © 2020-2021. All rights reserved by{" "}
            <span className="font-bold">Apartment🏠Finder</span> App
          </p>
        </div>
      </div>
    </>
  );
}
