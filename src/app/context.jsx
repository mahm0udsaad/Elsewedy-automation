"use client"
import { Fragment, useContext, useEffect ,useRef,useState} from 'react'
import { createContext } from 'react';

export const MyContext = createContext();
const CounterProvider = ({ children }) => {
  const [isFooterInview, setIsFooterInview] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const [bg  , setBg] = useState('transparent')
  const [color  , setColor] = useState('white')

  return (
    <MyContext.Provider value={{ color , setColor, bg , setBg ,isFooterInview , setIsFooterInview , openTab , setOpenTab}}>
      {children}
    </MyContext.Provider>
  );
};

export default CounterProvider;