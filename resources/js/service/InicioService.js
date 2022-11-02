import { http } from "./Http"

export default {
    getTest(){
        return http().get(`/test`);
    },
}
