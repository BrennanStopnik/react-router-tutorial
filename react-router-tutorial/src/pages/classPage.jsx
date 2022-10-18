import { Link, useNavigate } from "react-router-dom"

const ClassPage = () => {

    const navigate = useNavigate()

    const redirectUserFunction = () => {
        navigate("/")
    }

    return (
        <div>
            <h1>Hello Class!</h1>
            <Link to="/">Home Page</Link>
            <br/>
            <button onClick={() => {
                redirectUserFunction()
            }}>Redirect User</button>
        </div>
    )
}

export default ClassPage;