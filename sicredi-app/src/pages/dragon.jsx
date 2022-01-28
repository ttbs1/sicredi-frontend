import { useLocation } from "react-router-dom";

export default function Dragon() {

    const location = useLocation();
    const { dragon } = location.state;

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="col-8">
                    <div className="info">
                        <p><span>Id:</span> {dragon.id}</p>
                        <p><span>Created at:</span> {dragon.createdAt}</p>
                        <p><span>Name:</span> {dragon.name}</p>
                        <p><span>Type:</span> {dragon.type}</p>
                        <p><span>Histories:</span> {dragon.histories.map(response => <div>{response}</div>)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}