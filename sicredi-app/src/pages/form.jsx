import { useState } from "react";
import { postDragon, putDragon } from "../util/api";
import { useLocation } from "react-router-dom";

export default function Form(props) {

    const location = useLocation();
    const {dragon} = location.state;
    const [name, setName] = useState(dragon.name);
    const [type, setType] = useState(dragon.type);
    const [histories, setHistories] = useState(dragon.histories);

    const handleSubmit = (e) => {

        if (dragon.hasOwnProperty("id")) {
            putDragon({
                id: dragon.id,
                name: name,
                type: type,
                histories: histories
            })
        } else {
            postDragon({
                name: name,
                type: type,
                histories: histories
            })
        }
        e.preventDefault();
    }

    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-8">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Dragon type</label>
                    <select className="form-select" defaultValue={type} onChange={(e) => setType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="chinese">Chinese</option>
                        <option value="earth">Earth</option>
                        <option value="fire">Fire</option>
                        <option value="ice">Ice</option>
                        <option value="water">Water</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label">Histories</label>
                    <textarea className="form-control" onChange={(e) => setHistories([e.target.value])} value={histories} />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="button" onClick={handleSubmit}><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}