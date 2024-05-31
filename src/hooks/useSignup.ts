import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface SignupForm {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
  }: SignupForm) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);

    try {
      if (username === "teste123") {
        return toast.error("Usuário já está sendo usado!");
      }
      localStorage.setItem("login", username);
      toast.success("Usuário criado com sucesso!");
      navigate("/address");
    } catch (error) {
      toast.error("Erro ao criar usuário!");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return { signup, loading };
}

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
}: SignupForm) => {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Por favor preencha todos os campos");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("As senhas não coincidem");
    return false;
  }
  if (password.length < 6) {
    toast.error("A senha deve ter no mínimo 6 caracteres");
    return false;
  }
  if (username.length < 6) {
    toast.error("O username deve ter no mínimo 6 caracteres");
    return false;
  }

  return true;
};
