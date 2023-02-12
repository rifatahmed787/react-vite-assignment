import axios from "axios";
export class UserService {
    private static URL:string ="https://jsonplaceholder.typicode.com"

    public static getAllUsers(){
        let UserURL:string =`${this.URL}/posts`
        return axios.get(UserURL)
    }
}