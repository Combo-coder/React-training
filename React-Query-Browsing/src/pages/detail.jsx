import { Link, Outlet, useParams } from "react-router";
import Header from "../components/header";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";
import Error from "../components/error";

export default function Detail() {

    const {userId} = useParams()
    if (userId !== undefined){
        
        const {data, isLoading, error} = useQuery({
        queryKey: ["user", userId],
        queryFn: async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            return await res.json()
            }
        })

        if (isLoading)
            {
                return <Loading />
            }
        if (error){
                return <Error error={error} />
            }

        return <div>
            <h2>Détails de l'utilisateur {data.name}</h2>
            
            {data !== undefined ? 
            ( <div>
                <h3>nom: {data.name} </h3>
                <h3>email: {data.email} </h3>
                <h3>contact: {data.phone} </h3>
                <h3>ville: {data.address.city} </h3>
                <h3>rue: {data.address.street} </h3>
                <h3>compagnie: {data.company.name} </h3>
                <h3>site web: {data.website} </h3>

            </div> ) : (
                <div>
                    <h5>no data here</h5>
                </div>
            )
        }
        <Link to="/" > retour à l'accueil</Link>
        </div>

    }
    return (
        <div>
            <Header />
             <Outlet />
                <h5>
                    Sélectionnée un contact pour plus de détails:
                    <Link to="/" > retour à l'accueil</Link>
                </h5>
               
            
        </div>
    )
}

/*
"id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"

*/