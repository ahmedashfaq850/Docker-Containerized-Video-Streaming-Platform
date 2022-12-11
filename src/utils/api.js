import axios from 'axios';


const Base_Url = 'https://youtube138.p.rapidapi.com'; 

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '44ab46d0a0msh3254ab85ccd2e90p1fafa9jsn9c32810cc4a3',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async (url)=> {
    const { data } = await axios.get(`${Base_Url}/${url}`, options);
    return data;
  }
