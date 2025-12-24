import { useEffect, useState } from "react"

export default function UpToName(){
    const initialValue = "bob is good"
    const [typedName, setTypedName] = useState(initialValue);

    useEffect(() => {
        console.log(typedName);
        setTypedName("noooooooo, he is not that good");
    }, [])

    function nameChangeHandler(evt){
        if (evt.target.value !== ""){
            setTypedName(evt.target.value);
        }
        else{
            setTypedName(initialValue);
        }
    }

    return (
        <>
            <input type="text" id="" onChange={nameChangeHandler}/>
            <h2>{typedName}</h2>
        </>
    )
}