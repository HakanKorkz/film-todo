import request from "./fetch";

const posts = (data) => {
    return request(data);
}
const gets = (data) => {
    return request(data,"get");
}

export default posts(data)