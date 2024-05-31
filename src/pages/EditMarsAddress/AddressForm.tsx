import { useState } from "react";
import useAddressMars from "../../hooks/useMarsAddress";

export default function AddresForm() {
  const [inputs, setInputs] = useState({
    description: "Fábrica Alpha",
    lot: "1234",
  });
  const { AddAddressMars, loading } = useAddressMars();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddAddressMars(inputs);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-xl px-8 pb-56 self-center mt-6"
      >
        <div className="flex gap-10">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Descrição<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="Descrição"
              className="w-[280px] input input-bordered h-10 bg-gray-900"
              value={inputs.description}
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Lote<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="Lote"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.lot}
              onChange={(e) => setInputs({ ...inputs, lot: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-error text-white mr-6 self-center w-full ml-6 mt-56"
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            "Salvar Endereço"
          )}
        </button>
      </form>
    </section>
  );
}
