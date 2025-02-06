import { Link } from "react-router-dom"

const Home = () => {
    return <>
        {/* <a href="/about" target="_blank">Go to about page</a> */}
        <Link to="/about">Go to about page</Link>
    </>
}

export default Home