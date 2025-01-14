
import { useState } from 'react'
import './Header.css'
import Footer from '../Footer/Footer'

const Header = ({value,setValue}) => {

    return <div className="Header">
        <>
         this is {value} from Header component
        </>
        <br />
        <button onClick={() => setValue(20) }>Change Value</button>
    </div>
}


export default Header
