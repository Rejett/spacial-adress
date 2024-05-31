import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ username, password }: LoginForm) => {
    const success = handleInputErrors({
      username,
      password,
    });

    if (!success) return;

    setLoading(true);

    try {
      if (username === "teste123" && password === "teste123") {
        toast.success("Sucesso ao iniciar Sessão");
        localStorage.setItem("login", username);
        navigate("/address");
      } else {
        toast.error("Credenciais inválidas!");
      }
    } catch (error) {
      toast.error("Erro ao iniciar sessão!");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

const handleInputErrors = ({ username, password }: LoginForm) => {
  if (!username || !password) {
    toast.error("Por favor preencha todos os campos");
    return false;
  }

  return true;
};
