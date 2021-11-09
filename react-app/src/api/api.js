import axios from "axios";

export const instance = axios.create({

    baseURL: 'http://localhost:3000/',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

export const competitionsAPI = {
    getAll: () =>
        instance
            .get(`animals`)
            .then((res) => {
                return res.data
            }),
    get: (id) =>
        instance
            .get(`animals/${id}`)
            .then((res) => {
                return res.data
            }),
    create: (data) =>
        instance
            .post(`animals`, data)
            .then((res) => {
                return res.data
            }),
    update: (data) =>
        instance
            .put(`animals/${data.id}`, data)
            .then((res) => {
                return res.data
            }),
    remove: (id) =>
        instance
            .delete(`animals/${id}`)
            .then((res) => {
                return res.data
            }),

};
