import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export default function Product(){

    const {data, isLoading, error} = useQuery({
        queryKey: ["todo"],
        queryFn: async () => {
            const results = await fetch("https://jsonplaceholder.typicode.com/todos")
            
            const data = await results.json()
            console.log(data)

            return data
        }
    })

    if (isLoading) return ( <h1>Chargement...</h1> )
    if (error) return ( <div>
        <h1>
            Une erreur est survenue
        </h1>
    </div> )
    if (!Array.isArray(data)) return <p>Données invalides; type: {typeof datas}</p>;

    return <div>
        <h1>Products Here</h1>
        <Link to="/">
            <h2>Home</h2>
        </Link>

        <Link to="/contact">
            <h2>contact</h2>
        </Link>

        <Link to="/about">
            <h2>about</h2>
        </Link>

        {data.map((todo) => (
            <div>
                <h3>todo id: {todo.id}</h3>
                <p>todo title: {todo.title}</p>
            </div>
        )
        )}
    </div>
}