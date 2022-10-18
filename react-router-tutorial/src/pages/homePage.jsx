import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link to="/class">Class Page</Link>
        </div>
    )
}

export default HomePage;