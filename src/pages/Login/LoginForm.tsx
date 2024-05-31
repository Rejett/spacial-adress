import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import SocialLogin from "../../components/SocialLogin";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [credencial, setCredencial] = useState({
    username: "",
    password: "",
  });
  const { login, loading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(credencial);
  };

  return (
    <form
      className="flex flex-col shadow-xl p-8 w-[350px] md:w-[400px] self-center bg-background-form"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="label p-2">
          <span className="text-base label-text text-gray-100">Usuário</span>
        </label>
        <input
          type="text"
          placeholder="Digite o Usuário"
          className="w-full input input-bordered h-10"
          value={credencial.username}
          onChange={(e) =>
            setCredencial({ ...credencial, username: e.target.value })
          }
        />
      </div>
      <div className="mt-4">
        <label className="label">
          <span className="text-base label-text text-gray-100">Senha</span>
        </label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          className="w-full input input-bordered h-10"
          value={credencial.password}
          onChange={(e) =>
            setCredencial({ ...credencial, password: e.target.value })
          }
        />
      </div>
      <Link
        to="/signup"
        className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-4 inline-block"
      >
        {"Não"} Possui uma conta?
      </Link>
      <div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn-block btn-sm mt-6"
        >
          {loading ? <span className="loading loading-spinner" /> : "Login"}
        </button>
      </div>
      <SocialLogin />
    </form>
  );
}
