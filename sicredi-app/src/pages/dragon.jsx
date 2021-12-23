import { useLocation } from "react-router-dom";

export default function Dragon() {

    const location = useLocation();
    const { dragon } = location.state;

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="col-8">
                    <div className="info">
                        <p>Id: {dragon.id}</p>
                        <p>Created at: {dragon.createdAt}</p>
                        <p>Name: {dragon.name}</p>
                        <p>Type: {dragon.type}</p>
                        <p>Histories: {dragon.histories}</p>
                    </div>
                </div>
            </div>
        </>
    )
}