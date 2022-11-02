import api from "@/Utils/api"

export const displayCars = () => api.post(`https://api.chargetrip.io/graphql`, {
    availability: [0, 1],
    0: 0,
    1: 1,
    page: 0,
    search: "",
    size: 10
},{ headers: {
        'x-client-id': '5ed1175bad06853b3aa1e492',
        'x-app-id': '623998b2c35130073829b2d2'
}})

export default {displayCars}