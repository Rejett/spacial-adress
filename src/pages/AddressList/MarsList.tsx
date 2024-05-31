import { useState } from "react";
import HeaderAddress from "../../components/HeaderAddress";
import { addressData } from "../../data/addressMarsData";
import mars from "../../assets/mars.jpg";

export default function MarsList() {
  const [selectedItemId, setSelectedItemId] = useState<number>(1);

  const handleItemClick = (id: number) => {
    setSelectedItemId(id);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <HeaderAddress navigate="/create-mars-address" />
      </div>
      <h4 className="text-lg font-bold text-gray-800 mt-10">
        Lista de endereços
      </h4>
      <section className="w-full h-[250px] px-4  mt-4 flex flex-col overflow-y-auto">
        {addressData.map((item) => (
          <div
            key={item.id}
            className={`flex mt-6 p-2 gap-6 border-2 rounded-xl relative ${
              selectedItemId === item.id && "border-2 border-blue-600"
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="rounded-full w-6 h-6 bg-gray-300 absolute top-1 right-2 border-2 border-gray-200 flex items-center justify-center">
              {selectedItemId === item.id && (
                <span className="rounded-full w-4 h-4 bg-blue-500 " />
              )}
            </div>
            <div className="w-[100px]">
              <img
                src={mars}
                alt="Foto do mapa"
                className="w-40 h-30 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl text-gray-800">
                {item.description}
              </h1>
              <h3 className="font-semibold text-lg text-gray-700 mt-2">
                Lote: {item.lot}
              </h3>
              <div className="flex gap-4 mt-6">
                <button className="btn  text-white">Editar Endereço</button>
                <button className="btn btn-warning text-white">
                  Remover Endereço
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
