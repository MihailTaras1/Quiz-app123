import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com/";

const Axios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {a
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        // Store the response data in your desired storage solution
        // For example, you can use local storage:
        localStorage.setItem("triviaData", JSON.stringify(res.data));

        setResponse(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { storedResponse: response, error, loading };
};

export default Axios;
