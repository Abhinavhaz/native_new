import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";
 


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     headers: {
//       "X-RapidAPI-Key": '',
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//     params: { ...query },
//   };
const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,  
  headers: {
    'X-RapidAPI-Key':'8a4087170cmsh956bd6005d5c3abp1ad40fjsnee7b9ebd6aa2',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
  params: { ...query },
  }



  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;