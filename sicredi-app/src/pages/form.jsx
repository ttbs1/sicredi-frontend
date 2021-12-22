import { useState } from "react";
import { postDragon } from "../util/api";

export default function Form(props) {

    const [name, setName] = useState("");
    const [type, setType] = useState("default");
    const [histories, setHistories] = useState([])

    const handleSubmit = (e) => {
        console.log(name)
        console.log(type)
        console.log(histories)


        postDragon({
            name: name,
            type: type,
            histories: histories
        })
        e.preventDefault();
    }

    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-8">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Dragon type</label>
                    <select className="form-select" defaultValue="default" onChange={(e) => setType(e.target.value)}>
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
                    <textarea className="form-control" onChange={(e) => setHistories([e.target.value])} />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="button" onClick={handleSubmit}><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}