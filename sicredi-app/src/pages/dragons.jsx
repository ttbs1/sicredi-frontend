import { useState, useEffect } from "react";
import { getDragons } from "../util/api";
import { Link } from "react-router-dom";
import "./dragons.css"

export default function Dragons() {

    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        getDragons().then(response => setDragons((response.data)))
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    {dragons.map((dragon, i) => {
                        const cardContent = (
                            <div className="bg-opacity p-4">
                                <div className="title">{dragon.name}</div>
                                <div>{dragon.type}</div>
                                <div className="options">
                                    <Link to={`/dragon/${dragon.id}`}><i class="fas fa-file-alt"></i></Link> <i className="fas fa-edit"></i> <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                        )
                        return (
                            <div className="col-md-4 p-4" key={i}>
                                {dragon.type === "fogo" ? <div className="fire-card card">{cardContent}</div>
                                    : dragon.type === "gelo" ? <div className="ice-card card">{cardContent}</div>
                                        : dragon.type === "água" ? <div className="water-card card">{cardContent}</div>
                                            : dragon.type === "earth" ? <div className="earth-card card">{cardContent}</div>
                                                : dragon.type === "chinese" ? <div className="chinese-card card">{cardContent}</div>
                                                    : <div className="default-card card">{cardContent}</div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}