import { useState, useEffect } from "react";
import { getDragons } from "../util/api";

export default function Form(props) {

    const [dragon, setDragon] = useState([]);

    useEffect(() => {

    }, [dragon]);

    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-8">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Dragon type</label>
                    <select className="form-select">
                        <option selected value="default">Default</option>
                        <option value="chinese">Chinese</option>
                        <option value="earth">Earth</option>
                        <option value="fire">Fire</option>
                        <option value="ice">Ice</option>
                        <option value="water">Water</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label">Histories</label>
                    <textarea className="form-control" />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="button"><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}