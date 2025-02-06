import { useParams } from "react-router"

const News = () => {

    const { id, name } = useParams()

    // const params = useParams()

    // const id = params.id
    // const name = params.name

    //request axios

    return <> {id}</>
}

export default News