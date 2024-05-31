import { useState } from "react";
import InputMask from "react-input-mask";
import useAddressEarth from "../../hooks/useEarthAddress";

export default function AddresForm() {
  const [inputs, setInputs] = useState({
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const { AddAddressEarth, loading } = useAddressEarth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputs", inputs);
    AddAddressEarth(inputs);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-xl px-8 pb-5 self-center"
      >
        <div className="flex gap-20">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                CEP<sup> *</sup>
              </span>
            </label>
            <InputMask
              mask="99999-999"
              maskPlaceholder=""
              placeholder="CEP"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.zipCode}
              onChange={(e) =>
                setInputs({ ...inputs, zipCode: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                País<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="País"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.country}
              onChange={(e) =>
                setInputs({ ...inputs, country: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Estado<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="Estado"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.state}
              onChange={(e) => setInputs({ ...inputs, state: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Cidade<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="Cidade"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.city}
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-800">
              Bairro<sup> *</sup>
            </span>
          </label>
          <input
            type="text"
            placeholder="Bairro"
            className="w-full input input-bordered h-10 bg-gray-900"
            value={inputs.neighborhood}
            onChange={(e) =>
              setInputs({ ...inputs, neighborhood: e.target.value })
            }
          />
        </div>
        <div className="flex gap-20">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Endereço<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="Endereço"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.street}
              onChange={(e) => setInputs({ ...inputs, street: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-800">
                Número<sup> *</sup>
              </span>
            </label>
            <input
              type="text"
              placeholder="Número"
              className="w-full input input-bordered h-10 bg-gray-900"
              value={inputs.number}
              onChange={(e) => setInputs({ ...inputs, number: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-error text-white  self-center w-full mt-4"
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            "Adicionar Endereço"
          )}
        </button>
      </form>
    </section>
  );
}
