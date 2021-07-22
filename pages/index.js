import React from "react";
import apartmentItems from "../components/apartmentItems"

export default function index() {

  return (
    <>
    <div className="text-3xl flex justify-center font-bold">
      Apartment Finder App
    </div>
    <apartmentItems/>
    </>
  );
}