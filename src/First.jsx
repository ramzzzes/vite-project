import { useContext, useState } from "react";
import Second from "./Second"
import { UserContext } from "./Context/UserContext";
import { useSelector } from "react-redux";

const First = () => {
    const counter = useSelector(state => state.counter)
    
    return <>
    {counter} From First.jsx
    </>
}

export default First;