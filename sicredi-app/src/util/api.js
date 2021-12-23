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

export async function postDragon(dragon) {
    try {
        let response = await axios.post(url, {
            name: dragon.name,
            type: dragon.type,
            histories: dragon.histories
        })
        
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function putDragon(dragon) {
    try {
        let response = await axios.put(`${url}/${dragon.id}`, {
            id: dragon.id,
            name: dragon.name,
            type: dragon.type,
            histories: dragon.histories
        })

        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteDragon(id) {
    try {
        let response = await axios.delete(`${url}/${id}`);

        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};