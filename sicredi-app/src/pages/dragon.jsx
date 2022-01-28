import { useLocation } from "react-router-dom";
import DragonInfo from "../components/DragonInfo";

export default function Dragon() {

    const location = useLocation();
    const { dragon } = location.state;

    return (
        <DragonInfo dragon={ dragon } ></DragonInfo>
    )
}