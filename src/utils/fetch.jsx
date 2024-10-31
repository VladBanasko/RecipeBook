import axios from "axios";
import { useEffect, useState } from "react";


const options = {
  method: 'GET',
  url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  params: {
    // query: 'italian wedding soup'
    query: ''
  },
  headers: {
    // 'X-RapidAPI-Key': '2756518c16msh4a2d7cb476360ecp1c9bedjsn2f91e91e44e0',
    'X-RapidAPI-Key': 'iCbLCOwlJnd1+iHDCUGLyg==EmgyDbmtNbgEzmg7',
    'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
  }
};



const useFetchData = () => {

  const [list, setList] = useState([])

  const getData = async () => {


    try {

      // const response = await axios.request(options);
      const response = await axios.request({
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe', method: 'GET', headers: {
          'X-RapidAPI-Key': '2756518c16msh4a2d7cb476360ecp1c9bedjsn2f91e91e44e0',
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }, params: { query: 'burger' }
      })



      const results = response.data.map((item) => {
        // console.log(item);
        const { title, ingredients, instructions, servings } = item
        return { title, ingredients, instructions, servings }
      })
      // console.log(results);
      setList(results)

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return { list }
}
// export default useFetchData

