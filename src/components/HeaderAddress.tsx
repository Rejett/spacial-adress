import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function HeaderAddress({ navigate }: { navigate: string }) {
  return (
    <header className="flex gap-2 items-center mt-8 w-full">
      <label className="input input-bordered flex items-center gap-2 bg-white text-gray-600 w-[200px] md:w-[400px]">
        <input type="text" className="grow" placeholder="Buscar Endereços" />
        <CiSearch className="text-2xl text-mars cursor-pointer" />
      </label>
      <Link to={navigate} className="btn btn-error text-white">
        Adicionar Endereço
      </Link>
    </header>
  );
}
