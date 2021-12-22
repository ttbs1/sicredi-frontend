import { useState, useEffect } from "react";
import { getDragons } from "../util/api";

export default function Dragon () {

    const [dragon, setDragon] = useState([]);

    useEffect(() => {
        getDragons().then(response => setDragon([response.data]))
        console.log(dragon)
    }, []);

    return (
        <>
        </>
    )
}