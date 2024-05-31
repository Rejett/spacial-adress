import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addressData } from "../data/addressMarsData";

interface AddresMarsForm {
  description: string;
  lot: string;
}

export default function useAddressMars() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const AddAddressMars = async ({ description, lot }: AddresMarsForm) => {
    const success = handleInputErrors({
      description,
      lot,
    });

    if (!success) return;

    setLoading(true);
    setTimeout(() => {
      try {
        addressData.push({
          id: addressData.length + 1,
          description,
          lot,
        });
        toast.success("Lote adicionado com sucesso!");
        navigate("/");
      } catch (error) {
        toast.error("Erro ao criar usuário!");
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  return { AddAddressMars, loading };
}

const handleInputErrors = ({ description, lot }: AddresMarsForm) => {
  if (!description) {
    toast.error("Por favor preencha o campo de Descrição");
    return false;
  }
  if (!lot) {
    toast.error("Por favor preencha o campo de Lote");
    return false;
  }

  if (lot.length != 4) {
    toast.error("Lote inválido");
    return false;
  }

  if (description.length > 60) {
    toast.error("Descrição muito grande!");
    return false;
  }

  return true;
};
