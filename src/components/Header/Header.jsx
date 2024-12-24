
import './Header.css'

const Header = ({a = 2,b = 4,mainText}) => {
    // let props = {
    //     mainText : 'This is main text',
    //     secondText : 'This is second text',
    //     thirdText : 'This is third text',
    // }

    return <div className="Header">
        {mainText}
    </div>
}


export default Header
