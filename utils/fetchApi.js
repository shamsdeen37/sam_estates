import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '9e6a9d3774msh167639bcec94a0bp19fe6bjsn088b2f63a922' ,
    },
  });
    
  return data;
}