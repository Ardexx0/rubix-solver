import { createContext, useState, useContext, useEffect } from "react";

const RubixContext = createContext()

export const useRubixContext = () => useContext(RubixContext)

export const RubixProvider = ({children}) => {

    const [side, setSide] = useState('Front')
    const [sideNo, setSideNo] = useState(0)
    const [selColour, setSelColour] = useState('red')
    const [selColourNo, setSelColourNo] = useState(0)
    const [sideColours, setSideColours] = useState([
        [0,0,0 ,0,0,0 ,0,0,0], //Front & red start
        [4,4,4 ,4,4,4 ,4,4,4], //Up & yellow start
        [5,5,5 ,5,5,5 ,5,5,5], //Down & white start
        [2,2,2 ,2,2,2 ,2,2,2], //Left & blue start
        [1,1,1 ,1,1,1 ,1,1,1], //Right & green start
        [3,3,3 ,3,3,3 ,3,3,3]  //Back & orange start
    ])



    const value = {
        side,
        setSide,
        sideNo,
        setSideNo,
        selColour,
        setSelColour,
        selColourNo,
        setSelColourNo,
        sideColours, 
        setSideColours, 
    }

    return <RubixContext.Provider value={value}>
        {children}
    </RubixContext.Provider>

}