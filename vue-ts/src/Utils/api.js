import axios from "axios";
export default axios.create({
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-client-id': '5ed1175bad06853b3aa1e492',
        'x-app-id': '623998b2c35130073829b2d2',
    },
});