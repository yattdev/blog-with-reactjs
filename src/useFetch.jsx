import { useCallback, useEffect, useState } from "react";
import axiosInstance from "./axios";
import { useGlobalContext } from "./context";

const useFetch = (url) => {
  const { setLoading } = useGlobalContext();
  const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    setLoading(true);
    await axiosInstance
      .get(url)
      .then((resp) => {
        setItems(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, [url]);

  useEffect(() => {
    getItems();
  }, [url, getItems]);
  return { items };
};

export default useFetch;
