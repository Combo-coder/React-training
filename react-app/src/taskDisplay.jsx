export default function TaskDisplay(props)
{
    return (
    <div className="card-container" >
        {props.taskList.length > 0 ? 
            props.taskList.map( (item) =>
                (  
                    <div className="card" >
                        <div className="card-img"> image ici</div>
                        <h2>{item.name}</h2>
                        <p> {item.task} </p>
                    </div>
                )
            )
            : ""}
    </div>
    )
}