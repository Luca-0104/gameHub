import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e5740090d2f547ee8af54db8b89f29c7"
    }
})