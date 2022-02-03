import { useState } from "react";
import { postDragon, putDragon } from "../util/api";
import { useLocation, Link } from "react-router-dom";

export default function Form(props) {

    const location = useLocation();
    const {dragon} = location.state;
    const [name, setName] = useState(dragon.name);
    const [type, setType] = useState(dragon.type);
    const [histories, setHistories] = useState(dragon.histories);
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {

        if (dragon.hasOwnProperty("id")) {
            putDragon({
                id: dragon.id,
                name: name,
                type: type,
                histories: (histories+'').split("\n")
            }).then(response => setStatus(response.status))
        } else {
            postDragon({
                name: name,
                type: type,
                histories: (histories+'').split("\n")
            }).then(response => setStatus(response.status))
        }
        e.preventDefault();
    }

    return (
        <div className="container form">
            <form className="row g-3">
                <div className="col-md-8">
                    <label style={{paddingBottom:"0.75rem"}}>Name:</label>
                    <input type="text" className="input-default" onChange={(e) => setName(e.target.value)} value={name} placeholder="Dragon name" />
                </div>
                <div className="col-md-4">
                    <label style={{paddingBottom:"0.75rem"}}>Dragon type:</label>
                    <select className="input-default" defaultValue={type} onChange={(e) => setType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="chinese">Chinese</option>
                        <option value="earth">Earth</option>
                        <option value="fire">Fire</option>
                        <option value="ice">Ice</option>
                        <option value="water">Water</option>
                    </select>
                </div>
                <div className="col-12">
                    <label style={{paddingBottom:"0.75rem"}}>Histories:</label>
                    <textarea className="input-default" onChange={(e) => setHistories([e.target.value])} value={Array.isArray(histories) ? histories.join("\n") : histories} placeholder="tip: use a line break to separate one or more histories" />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    {status === 201 ? <div>Dragon created successfully! <p style={{textAlign: 'center'}}><Link to={"/dragon"}>Back</Link></p></div>
                        : status === 200 ? <div>Dragon updated successfully! <p style={{textAlign: 'center'}}><Link to={"/dragon"}>Back</Link></p></div> 
                            : status ? "Unexpected error!" : null }
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="button" onClick={handleSubmit}><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}