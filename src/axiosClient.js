import axios from 'axios'
export const category = ['sport','general','technology','business','entertainment']
const axiosClient = axios.create({
   baseURL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=03436138bcba4214a89cb998aebe798a&category=`
    
  });
  export default axiosClient;
