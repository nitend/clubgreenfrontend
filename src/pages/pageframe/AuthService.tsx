import { getAccessToken } from "../../accessToken";
import jwtDecode from 'jwt-decode';


export const checkAuth = () => {
    const token = getAccessToken()

    console.log("AccessToken: "+token)

    if(token){
        const {exp} = jwtDecode(token)
        if(Date.now() >= exp * 1000){
            return false;
        } else {
            return true;
        }
    } else {
        return false
    }
}