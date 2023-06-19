import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com/";

const Axios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => {
          // Save the response data to a variable or storage solution
          const savedResponse = res.data;
          const storageKey = "apiResponse"; // Path to the saved response
          localStorage.setItem(storageKey, JSON.stringify(savedResponse));
          // Update the state with the response data
          setResponse(savedResponse);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default Axios;