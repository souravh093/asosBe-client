import React, { createContext, useEffect, useState } from "react";
import loadData from "../../utilities/LoadData/LoadData";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const RootContext = createContext(null);
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
        displayName: name
    })
  };

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
    createUser,
    loginUser,
    updateUser,
  };

  return (
    <RootContext.Provider value={rootData}>{children}</RootContext.Provider>
  );
};

export default Provider;
