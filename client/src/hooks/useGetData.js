import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios(url);

      setState({
        data: res.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      setState({
        data: [],
        error: error,
        loading: false,
      });
    }
  };

  return [state.data, state.loading, state.error];
};

export default useGetData;