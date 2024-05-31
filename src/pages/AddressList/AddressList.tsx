import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import EarthList from "./EarthList";
import MarsList from "./MarsList";
export default function AddressList() {
  const [active, setActive] = useState("earth");

  return (
    <main className="bg-gray-100 w-[390px] md:w-[600px] self-center mt-1 rounded-xl shadow-md overflow-hidden">
      <div className="p-4 flex flex-col">
        <div className="flex items-center mb-4 gap-6">
          <div className="flex justify-center items-center w-7 h-7 shadow-md rounded-md cursor-pointer">
            <IoIosArrowBack className="font-bold text-2xl text-gray-800" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Endereços</h1>
        </div>
        <hr />
        <div className="flex px-2 py-1 bg-gray-200 rounded-lg w-max self-center mt-6">
          <button
            className={`py-2 px-5 rounded-lg focus:outline-none ${
              active === "earth" && "bg-white shadow-md text-gray-600 font-bold"
            }`}
            onClick={() => setActive("earth")}
          >
            Endreços da Terra
          </button>
          <button
            className={`py-2 px-5 rounded-lg focus:outline-none ${
              active === "mars" && "bg-white shadow-md text-gray-600 font-bold"
            }`}
            onClick={() => setActive("mars")}
          >
            Endereços de Marte
          </button>
        </div>
        {active === "earth" && <EarthList />}
        {active === "mars" && <MarsList />}
      </div>
      <footer className="flex justify-end items-center gap-2 w-full h-14 bg-gray-200">
        <button className="btn text-white">Cancelar</button>
        <button className="btn btn-error text-white mr-6">
          Salvar alterações
        </button>
      </footer>
    </main>
  );
}
