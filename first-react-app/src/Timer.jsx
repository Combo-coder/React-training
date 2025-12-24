import { useState } from "react"



export default function Timer()
{
    const [count, setCount] = useState(0);

    function decreaseHandler(){
        if (count > 0){
            return setCount(count-1);
        }
        else{
            return 0;
        }
    }

    function increaseHandler(){
        setCount(count+1);
    }

    return <div>
        <button onClick={increaseHandler}>augmenter</button>
        <button onClick={decreaseHandler}>diminuer</button>
        <h2>nombre de {count > 1 ? "points actuels" : "point actuel"} : <span onClick={increaseHandler}>{count}</span></h2>
    </div>
}