import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
export default function Contact(){

    const {data, isLoading, error} = useQuery({
        queryKey: ["album"],
        queryFn: async () => {
            const results = await fetch("https://jsonplaceholder.typicode.com/photos")
            return await results.json()
        }
    })

    const id = 200;

    if (isLoading) {
        return ( <h1>Chargement...</h1> )
    }
    if (error){
        return ( <h1>une erreur est survenue: {error.message}</h1> )
    }

    
    return <div>
        <h1>Contact Page</h1>
        <Link to="/">
            <h2>Home</h2>
        </Link>

        <Link to="/about">
            <h2>about</h2>
        </Link>

        <Link to="/product">
            <h2>Products</h2>
        </Link>

        {
            data.map((picture, index) => (
                <div>
                    <h3>picture id: {picture.id}</h3>
                    <p>picture title: {picture.title}</p>
                </div>
            ))
        }
    </div>
}