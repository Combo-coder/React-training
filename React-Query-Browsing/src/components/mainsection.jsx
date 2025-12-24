import { useQuery } from "@tanstack/react-query"
import Loading from "./loading"
import UserCard from "./user-card"

export default function MainSection(){


    function fetchData()
    {
        return 
    }

    const {data, isError, isLoading, error, refetch} = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            return await res.json()
        },
    })

    

    if (isLoading){
        return ( <Loading></Loading> )
    }

    if (isError){
        return (
            <div>
                <h1>Impossible de charger les données</h1>
                <p> 
                    {error.message.toLocaleUpperCase() === "FAILED TO FETCH" ? "vérifez votre connexion internet!" 
                        : error.message} 
                        <button onClick={() => refetch() }>Réésayez</button>
                </p>
            </div>

        )
    }
    if (error){
        return <Error error={error} />
    }
    
    
    return <div className="main-container">
        <div className="main-content">
            <UserCard data={data} />
        </div>
        
    </div>
}