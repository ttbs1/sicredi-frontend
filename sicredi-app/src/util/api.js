import axios from "axios";

const url = `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`;

export async function getDragons() {
    try {
        let response = await axios.get(url);

        return {
            data: response.data
        };
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCall(id) {
    try {
        let response = await axios.get(url + `/${id}`);

        return {
            duration: response.data.duration,
            is_archived: response.data.is_archived,
            from: response.data.from,
            to: response.data.to,
            direction: response.data.direction,
            call_type: response.data.call_type,
            via: response.data.via,
            created_at: response.data.created_at,
            notes: response.data.notes
        } ;
    } catch (error) {
        console.log(error);
        return null;
    }
};