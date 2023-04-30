import React, { createContext, useEffect, useState } from "react";
import loadData from "../../utilities/LoadData/LoadData";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const RootContext = createContext(null);
const auth = getAuth(app);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await loadData();
      setProduct(result);
    };
    fetchData();
  }, []);

  const rootData = {
    user,
    product,
  };

  return (
    <RootContext.Provider value={rootData}>{children}</RootContext.Provider>
  );
};

export default Provider;
