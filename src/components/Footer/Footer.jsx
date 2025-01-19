import './Footer.css'

function Footer({value,setValue}) {

    return <div className='Footer'>
        this is {value} from Footer component
        <br />
        <button onClick={() => setValue(30) }>Change Value</button>

        Footer Component
    </div>
}

export default Footer
