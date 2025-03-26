import http from "../services/httpServices";
import config from "@/services/config.json";
import { useState } from "react";

const useGet = () => {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });
  let headers = {
    "Content-Type": "multipart/form-data",
    
  }
  
  const callAPI  = async (url) => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    http.get(`${config.apiEndPoint}${url}`, {
        headers,
      })
      .then((res) => {
        setRes({ data: res.data, isLoading: false, error: null });
      })
      .catch((error) => {
        console.log(error?.response?.data)
        setRes({ data: error?.response?.data, isLoading: false, error });
      });
  };
  return [res, callAPI];
};
export default useGet;
