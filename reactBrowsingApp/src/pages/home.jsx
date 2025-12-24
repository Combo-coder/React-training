import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
export default function Home(){

    const {data, isLoading, error} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const results = await fetch("https://jsonplaceholder.typicode.com/users")
            return await results.json()
        }
    })
 
    if (isLoading) {
        return ( <h1>Chargement...</h1> )
    }

    if (error) {
        return ( <h1>une erreur est survenue: {error.message}</h1> )
    }

    return <div>
        <h1>Home Page</h1>
        {/* <Link to="/about">
            <h2>about</h2>
        </Link> */}
        <a href="/about">about</a>

        <Link to="/contact">
            <h2>contact</h2>
        </Link>

        <Link to="/product">
            <h2>Products</h2>
        </Link>

        {data.map((user) => (
            <div>
                <h3>utilisateur: {user.name}</h3>
                <h5>ville: {user.address.city}</h5>
                <h5>quartier: {user.address.street}</h5>
            </div>
        ) )}
    </div>
}