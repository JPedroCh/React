import { CEP_API } from "./baseService";

function getAddresses(cep: string) {
  
  try {
    return CEP_API({
      method: 'GET',
      url: `/${cep}/json/`
    })
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

export default {
  getAddresses
}
