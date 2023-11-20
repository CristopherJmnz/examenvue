import axios from "axios";
import Global from './../Global'
export default class CubosService{

    login(user){
        let url=Global.urlApi + "api/manage/login";
        return axios.post(url,user).then(result=>{
            return result.data.response
        })
    }

    getPerfilUser(){
        let url=Global.urlApi + "api/manage/login";
        let token=JSON.parse(localStorage.getItem("token"))
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(url, config).then(response => {
            return response.data;
        })
    }
}