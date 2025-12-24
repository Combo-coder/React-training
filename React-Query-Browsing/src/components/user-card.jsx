import { Link } from "react-router";

export default function UserCard(props){

    return <>
            {props.data.map( (user) => (
                <div className="card">
                     <h3>nom: {user.name} </h3>
                    <p>email: {user.email} </p>
                    <Link to={`/detail/${user.id}`}> voir plus </Link>
                </div>
                ))}
    </>
        

}