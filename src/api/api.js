import * as axios from "axios";

export const getData = {
    getProducts: () => {
        return axios.get('https://d-element.ru/test_api.php')
    }
}