import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e5740090d2f547ee8af54db8b89f29c7"
    }
})

export default class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endpoint, config)
                .then(res => res.data)
    }
}