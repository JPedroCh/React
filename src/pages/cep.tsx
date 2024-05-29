import Layout from "../components/Layout";
import Input from "../components/Input";
import cepService from "../services/cep";
import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import FormCard from "../components/FormCard";
import InfoDisplay from "../components/InfoDisplay";

type FormValues = {
  cepNumber: string;
}

type CepObject = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

const Cep = () => {

  const [searchForm, setSearchForm] = useState<FormValues>({ cepNumber: ""});
  const [cepData, setCepData] = useState<CepObject  | undefined>(undefined);
  const [cepError, setCepError] = useState<boolean>(false);

  const handleSearchForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchForm({ ...searchForm, [event.target.name]: event.target.value })
  };

  const register = async () => {
    try{
      const response = await cepService.getAddresses(searchForm.cepNumber);

      if (response.status === 200) {
        if(response.data.erro === true){
          setCepError(true);
        } else {
          setCepData(response.data);
          setCepError(false);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setCepError(true);
      }
    }
  }

  return (
    <Layout>
      <FormCard title="Busca de Endereço por CEP">
        <Input
          label="Número de CEP"
          name="cepNumber"
          type="text"
          value={searchForm.cepNumber}
          onChange={handleSearchForm}
          placeholder="Insira o seu número de CEP"
          />
        <Button text="Buscar" onClick={register}/>
      </FormCard>

      { typeof cepData !== "undefined" && cepError === false &&
        <FormCard title={`Endereço`}>
          <InfoDisplay
            title="CEP"
            info={cepData?.cep || ""}
          />
          <InfoDisplay
            title="Logradouro"
            info={cepData?.logradouro || ""}
          />
          <InfoDisplay
            title="Complemento"
            info={cepData?.complemento || ""}
          />
          <InfoDisplay
            title="Bairro"
            info={cepData?.bairro || ""}
          />
          <InfoDisplay
            title="Localidade"
            info={cepData?.localidade || ""}
          />
          <InfoDisplay
            title="UF"
            info={cepData?.uf || ""}
          />
          <InfoDisplay
            title="IBGE"
            info={cepData?.ibge || ""}
          />
          <InfoDisplay
            title="DDD"
            info={cepData?.ddd || ""}
          />
          <InfoDisplay
            title="SIAFI"
            info={cepData?.siafi || ""}
          />
        </FormCard>
      }

      { cepError &&
        <FormCard title={`Erro!`}>
          <InfoDisplay
            title="Erro"
            info={"CEP não encontrado! Verifique novamente."}
          />
        </FormCard>
      }
    </Layout>
  );
};

export default Cep;
