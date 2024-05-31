import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import AddresForm from "./AddressForm";
import earth from "../../assets/earth-bg.jpg";

export default function EarthAddress() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gray-300 flex flex-col ">
      <main className="bg-gray-100 w-[390px] md:w-[600px] self-center mt-1 rounded-xl shadow-md overflow-hidden">
        <div className="p-4 flex flex-col">
          <div className="flex items-center mb-4 gap-6">
            <Link
              to="/"
              className="flex justify-center items-center w-7 h-7 shadow-md rounded-md cursor-pointer"
            >
              <IoIosArrowBack className="font-bold text-2xl text-gray-800" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">
              Adicionar endereço da Terra
            </h1>
          </div>
          <hr />
        </div>
        <div className="w-full flex justify-center">
          <img
            src={earth}
            alt="Imagem da terra"
            className="w-[550px] h-36 object-cover rounded-xl "
          />
        </div>
        <AddresForm />
      </main>
    </div>
  );
}
