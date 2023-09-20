"use client"

import React, { useState } from 'react';
import { createContext } from 'react';



export const MyContext = createContext();
const CounterProvider = ({ children }) => {
    const [isFooterInview, setIsFooterInview] = useState(false);


  return (
    <MyContext.Provider value={{ isFooterInview , setIsFooterInview}}>
      {children}
    </MyContext.Provider>
  );
};

export default CounterProvider;