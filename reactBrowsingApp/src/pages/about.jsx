import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export default function About(){
    
    const {data, isLoading, error} = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
            const results = await fetch("https://jsonplaceholder.typicode.com/posts")
            return await results.json()
        }
    })

    if (isLoading) return ( <h1>Chargement...</h1> )
    if (error) return ( <h2>une erreur est survenue </h2> )
    
    
    return <div>
        <h1>about Page</h1>
        <Link to="/">
            <h2>Home</h2>
        </Link>

        <Link to="/contact">
            <h2>contact</h2>
        </Link>

        <Link to="/product">
            <h2>Products</h2>
        </Link>

        {data.map((post) => (
            <div>
                <h3>post title : { post.title }</h3>
                <p>post content : { post.body } </p>
            </div>
        ))}
        
    </div>
}