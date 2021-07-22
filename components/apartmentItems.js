
import React from "react";
import { apartments } from "../database/data"

export default function apartmentItems() {
  return (
    <div className="flex justify-around">
      {apartments.map(() => (
        <div className="my-5 flex flex-col justify-between border-2 rounded-md w-1/4 text-center bg-purple-100 ring ring-purple-600 ring-offset-4 ring-offset-purple-100 ">
          <p>Picture: {apartments.picture}</p>
          <p>
            {data.rent.map((rent) => (
              <div>
                {rent.type} : {rent.value}$
              </div>
            ))}
          </p>
          <p>
            {data.prices.map((size) => (
              <div>
                {size.type} : {size.value}ft
              </div>
            ))}
          </p>
          <p>
              location: {apartments.location}
          </p>
        </div>
      ))}
    </div>
  );
}