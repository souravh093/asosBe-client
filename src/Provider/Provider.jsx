import React, { createContext, useEffect, useState } from 'react';
import loadData from '../../utilities/LoadData/LoadData';

export const RootContext = createContext(null);



const Provider = ({children}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await loadData();
            setProduct(result)
        };
        fetchData()
        
    }, [])
    
    const rootData = {
        product
    }
    
    return <RootContext.Provider value={rootData}>{children}</RootContext.Provider>
};

export default Provider;