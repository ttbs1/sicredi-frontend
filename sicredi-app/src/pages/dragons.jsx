import { useState, useEffect } from "react";
import { getDragons, deleteDragon } from "../util/api";
import { Link } from "react-router-dom";
import "./dragons.css"

export default function Dragons() {

    const [dragons, setDragons] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        getDragons().then(response => setDragons(response.data))
    }, [status]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                        <Link className="button" to={`/dragon/form`} state={{ dragon: { name: "", type: "default", histories: [] } }}><span>Create dragon</span></Link>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center status">
                        {status === 200 ? "Dragon was deleted successfully!" : status ? "Unexpected error!" : null}
                    </div>
                    {dragons.map((dragon, i) => {
                        const cardContent = (
                            <div className="bg-opacity p-4">
                                <div className="title">{dragon.name}</div>
                                <div>{dragon.type}</div>
                                <div className="options">
                                    <Link to={`/dragon/${dragon.id}`} state={{ dragon: dragon }}><i className="far fa-file-alt"></i></Link> <Link to={`/dragon/form/${dragon.id}`} state={{ dragon: dragon }}><i className="fas fa-edit"></i></Link> <button type="button" onClick={() => deleteDragon(dragon.id).then(response => setStatus(response.status))}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        )
                        return (
                            <div className="col-md-4 p-4" key={i}>
                                {dragon.type === "fire" ? <div className="fire-card card">{cardContent}</div>
                                    : dragon.type === "ice" ? <div className="ice-card card">{cardContent}</div>
                                        : dragon.type === "water" ? <div className="water-card card">{cardContent}</div>
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