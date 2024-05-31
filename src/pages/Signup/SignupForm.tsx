import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import SocialLogin from "../../components/SocialLogin";

export default function SignupForm() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { signup, loading } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(inputs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col shadow-xl p-8 w-[350px] md:w-[400px] self-center"
    >
      <div>
        <label className="label p-2">
          <span className="text-base label-text text-gray-100">
            Nome Completo
          </span>
        </label>
        <input
          type="text"
          placeholder="Digite seu Nome Completo"
          className="w-full input input-bordered h-10"
          value={inputs.fullName}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
      </div>
      <div>
        <label className="label p-2">
          <span className="text-base label-text text-gray-100">Usuário</span>
        </label>
        <input
          type="text"
          placeholder="Digite o nome de Usuário"
          className="w-full input input-bordered h-10"
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
      </div>
      <div>
        <label className="label p-2">
          <span className="text-base label-text text-gray-100">Senha</span>
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="w-full input input-bordered h-10"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
      </div>
      <div>
        <label className="label p-2">
          <span className="text-base label-text text-gray-100">
            Confirme senha
          </span>
        </label>
        <input
          type="password"
          placeholder="Digite Novamente"
          className="w-full input input-bordered h-10"
          value={inputs.confirmPassword}
          onChange={(e) =>
            setInputs({ ...inputs, confirmPassword: e.target.value })
          }
        />
      </div>
      <Link
        to="/login"
        className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-4 inline-block"
      >
        Já Possui uma conta?
      </Link>
      <div>
        <button disabled={loading} className="btn btn-block btn-sm mt-6">
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            "Cadastre-se"
          )}
        </button>
      </div>
      <SocialLogin />
    </form>
  );
}
