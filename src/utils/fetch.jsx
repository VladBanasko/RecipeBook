import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  params: {
    query: 'italian wedding soup'
  },
  headers: {
    'X-RapidAPI-Key': '2756518c16msh4a2d7cb476360ecp1c9bedjsn2f91e91e44e0',
    'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
  }
};

// fix axios 429 error

const FetchData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
export default FetchData

