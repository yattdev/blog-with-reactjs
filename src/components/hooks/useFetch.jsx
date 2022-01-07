import { useCallback, useEffect, useRef, useState } from "react";
import axiosInstance from "../../axios";
import { useGlobalContext } from "../../context";

const useFetch = (url) => {
  const { setLoading } = useGlobalContext();
  const [items, setItems] = useState([]);
  const mounted = useRef(false);

  const getItems = useCallback(async () => {
    setLoading(true);
    await axiosInstance
      .get(url)
      .then((resp) => {
        if (mounted.current) {
          setItems(resp.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (mounted.current) {
          console.error("Error occurred while fetching data");
          console.info("Successfully unmount");
        } else {
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
        }
      });
  }, [url, setItems, setLoading]);

  useEffect(() => {
    mounted.current = true; // Will set it to true on mount ...
    getItems();
    return () => {
      mounted.current = false;
    }; // ... and to false on unmount
  }, [url, getItems]);
  return { items };
};

export default useFetch;
