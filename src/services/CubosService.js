import axios from "axios";
import Global from './../Global'
export default class CubosService{
    getAllCubos(){
        let url=Global.urlApi + "api/cubos";
        return axios.get(url).then(response=>{
            return response.data
        })
    }

    getAllMarcas(){
        let url=Global.urlApi + "api/cubos/marcas";
        return axios.get(url).then(response=>{
            return response.data
        })
    }
    getCubosPorMarca(marca){
        let url=Global.urlApi + "api/cubos/cubosmarca/" + marca;
        return axios.get(url).then(response=>{
            return response.data
        })
    }

    findCuboById(id){
        let url=Global.urlApi + "api/cubos/" + id;
        return axios.get(url).then(response=>{
            return response.data
        })
    }

    getComentariosCubo(id){
        let url=Global.urlApi + "api/comentarioscubo/getcomentarioscubo/" + id;
        return axios.get(url).then(response=>{
            return response.data
        })
    }
}