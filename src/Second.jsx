import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const Second = () => {
     const {setLastname,lastname} = useContext(UserContext)
    
    return <>
    
    <br/>
    {lastname} from Second.jsx
    <button onClick={() => setLastname('Davit') }>Change state</button>
     
    </>
}

export default Second;