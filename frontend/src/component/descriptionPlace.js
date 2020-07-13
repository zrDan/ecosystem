import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

class DescriptionPlace extends Component {
  render() {
    const data = this.props.location.state.descriptionData;
    var imageLoop = Object.keys(data.images).map((key) => (
      <div className="h-64 md:h-full md:flex md:items-center" key={key}>
        <img className="h-full md:h-auto" src={data.images[key]} alt={key} />
      </div>
    ));

    return (
      <div className="md:grid md:grid-cols-2 md:content-center">
        <div className="md:flex md:self-center md:px-5">
          <Carousel
            autoPlay
            showIndicators={false}
            showArrows={true}
            showStatus={true}
            showThumbs={false}
          >
            {imageLoop}
          </Carousel>
        </div>
        <div>
          <div>
            <div className="flex items-center justify-center h-10 bg-blue-500 text-white font-semibold text-base md:rounded-md">
              <img
                className="h-8 pr-1"
                src="images/information.svg"
                alt="document"
              />
              Información
            </div>
            <div className="px-3 pt-3">
              <table className="w-full">
                <thead>
                  <tr>
                    <td className="pb-2 font-bold">Detalles</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-300">
                    <td className="w-1/2">
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="flex justify-center">
                          <img
                            className="h-8"
                            src="images/details/bedroom.svg"
                            alt="description"
                          />
                        </div>
                        <div>
                          <p className="text-xs">Recamaras</p>
                        </div>
                        <div className="flex justify-end">
                          <p>{data.details.bedroom}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="flex justify-center">
                          <img
                            className="h-6"
                            src="images/details/area.png"
                            alt="description"
                          />
                        </div>
                        <div>
                          <p className="text-xs">Espacio</p>
                        </div>
                        <div className="flex justify-end">
                          <p>{data.details.area}m2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="flex justify-center">
                          <img
                            className="h-6"
                            src="images/details/parking.svg"
                            alt="description"
                          />
                        </div>
                        <div>
                          <p className="text-xs">Estacionamieto</p>
                        </div>
                        <div className="flex justify-end">
                          <p>{data.details.parking}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="flex justify-center">
                          <img
                            className="h-10"
                            src="images/details/level.svg"
                            alt="description"
                          />
                        </div>
                        <div>
                          <p className="text-xs">Niveles</p>
                        </div>
                        <div className="flex justify-end">
                          <p>{data.details.levels}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="flex justify-center">
                          <img
                            className="h-8"
                            src="images/details/bathroom.svg"
                            alt="description"
                          />
                        </div>
                        <div>
                          <p className="text-xs">Baños</p>
                        </div>
                        <div className="flex justify-end">
                          <p>{data.details.bathroom}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="col-start-2 text-sm">
                          <p>Tipo</p>
                        </div>
                        <div className="col-start-3 flex justify-end">
                          <p>{data.offer}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="flex justify-center">
                          <img
                            className="w-8"
                            src="images/details/room.svg"
                            alt="description"
                          />
                        </div>
                        <div>
                          <p className="text-xs">Cuartos</p>
                        </div>
                        <div className="flex justify-end">
                          <p>{data.details.room}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="grid grid-cols-3 py-2 px-2 items-center font-semibold">
                        <div className="col-start-2 text-sm">
                          <p>Costo</p>
                        </div>
                        <div className="col-start-3 flex justify-end">
                          <p>${data.price}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-3 py-5">
              <div className="pb-2 font-bold">
                <p>Descripción</p>
              </div>
              <div className="text-justify text-sm">{data.description}</div>
            </div>
            <div className="px-3 pb-5">
              <div className="pb-2 font-bold">
                <p>Contacto</p>
              </div>
              <div className="grid grid-cols-2 text-justify text-sm">
                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center py-2">
                    <img
                      src={`images/livingPlace/logos/${data.owner}.jpg`}
                      alt="logo"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    {data.owner}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center justify-center py-2">
                    <img
                      className="h-10 pr-2"
                      src="images/phone.svg"
                      alt="phone"
                    />
                    <p>{data.contact}</p>
                  </div>
                  <div className="flex justify-center item-center">
                    <img className="h-5" src={data.trust} alt="trust" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 py-3">
            <div className="font-bold pb-2">
              <h3>Dirección</h3>
            </div>
            <div className="flex">
              <img
                className="pr-2"
                src="images/map-pointer.svg"
                alt="pointer"
              />
              <p>{data.location.map}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionPlace;
