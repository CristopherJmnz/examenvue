import axios from "axios";
import Global from './../Global'
export default class CubosService {

    login(user) {
        let url = Global.urlApi + "api/manage/login";
        return axios.post(url, user).then(result => {
            return result.data.response
        })
    }

    getPerfilUser() {
        let url = Global.urlApi + "api/manage/perfilusuario";
        let token = JSON.parse(localStorage.getItem("token"))
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get(url, config).then(response => {
            return response.data;
        })
    }

    getCompras() {
        let url = Global.urlApi + "api/compra/comprasUsuario";
        let token = JSON.parse(localStorage.getItem("token"))
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get(url, config).then(response => {
            return response.data;
        })
    }

    registroUser(user) {
        let url = Global.urlApi + "api/manage/registrousuario";
        return axios.post(url, user).then(result => {
            return result.data.response
        })
    }

    realizarPedido(id){
        let url = Global.urlApi + "api/compra/insertarpedido/" + id;
        let token = JSON.parse(localStorage.getItem("token"))
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.post(url,"",config).then(response => {
            return response.data;
        })
    }
}