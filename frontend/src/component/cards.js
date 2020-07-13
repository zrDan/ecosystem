import React from "react";

function Card({ type, price, location, details, images, offer }) {
  return (
    <div className="border-2 rounded-md border-gray-600">
      <div className="flex justify-center h-48">
        <img src={images[0]} className="w-full" alt="Living-place" />
      </div>
      <div className="py-2 px-4">
        <div className="text-blue-550 text-xl font-bold">
          <h1>
            {type} en {offer}
          </h1>
        </div>
        <div className="font-semibold">
          <div className="flex text-xs pt-2">
            <img className="w-4" src="images/map-pointer.svg" alt="marker" />
            <p>
              {location.neighborhood}, {location.delegation}
            </p>
          </div>
          <div className="flex font-bold items-center pt-2">
            <p className="text-lg pr-1">${price}</p>
            <p className="text-xs">MXN</p>
          </div>
        </div>
        <div className="pt-3 grid grid-cols-3 ">
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-600 font-semibold row-start-1 row-end-2">
              <p>Recamaras</p>
            </div>
            <div className="flex justify-between text-xl font-semibold pt-1">
              <img
                className="w-10"
                src="images/details/bedroom.svg"
                alt="bedroom"
              />
              <p className="pl-2">{details.bedroom}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-600 font-semibold row-start-1 row-end-2">
              <p>Baños</p>
            </div>
            <div className="flex justify-between text-xl font-semibold pt-1">
              <img
                className="w-8"
                src="images/details/bathroom.svg"
                alt="bedroom"
              />
              <p className="pl-2">{details.bathroom}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-gray-600 font-semibold row-start-1 row-end-2">
              <p>Espacio</p>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2">
              <img
                className="w-6"
                src="images\details\area.png"
                alt="bedroom"
              />
              <p className="pl-3">{details.area}m2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
