import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addressData } from "../data/addressEarthData";

interface AddresEarthForm {
  street: string;
  number: string;
  complement?: string | null | undefined;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export default function useAddressEarth() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const AddAddressEarth = async ({
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    country,
    zipCode,
  }: AddresEarthForm) => {
    const success = handleInputErrors({
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      country,
      zipCode,
    });

    if (!success) return;

    setLoading(true);
    setTimeout(() => {
      try {
        addressData.push({
          id: addressData.length + 1,
          street,
          number,
          complement: complement ?? "",
          neighborhood,
          city,
          state,
          country,
          zipCode,
        });
        toast.success("Cidade adicionada com sucesso!");
        navigate("/address");
      } catch (error) {
        toast.error("Erro ao criar usuário!");
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  return { AddAddressEarth, loading };
}

const handleInputErrors = ({
  street,
  number,
  complement,
  neighborhood,
  city,
  state,
  country,
  zipCode,
}: AddresEarthForm) => {
  if (!street) {
    toast.error("Por favor preencha o campo de rua");
    return false;
  }
  if (!number) {
    toast.error("Por favor preencha o campo de número");
    return false;
  }
  if (!neighborhood) {
    toast.error("Por favor preencha o campo de bairro");
    return false;
  }
  if (!city) {
    toast.error("Por favor preencha o campo de cidade");
    return false;
  }
  if (!state) {
    toast.error("Por favor preencha o campo de estado");
    return false;
  }
  if (!country) {
    toast.error("Por favor preencha o campo de país");
    return false;
  }
  if (!zipCode) {
    toast.error("Por favor preencha o campo de CEP");
    return false;
  }

  const zipCodePattern = /^[0-9]{5}-?[0-9]{3}$/;
  if (!zipCodePattern.test(zipCode)) {
    toast.error("CEP inválido");
    return false;
  }

  if (
    complement !== null &&
    complement !== undefined &&
    complement.length > 60
  ) {
    toast.error("Complemento muito grande!");
    return false;
  }

  return true;
};
