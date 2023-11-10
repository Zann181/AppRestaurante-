import axios from "axios";

const proxy = 'http://localhost:8080';

axios.defaults.proxy = {
  host: proxy,
  port: 8080,
};

const base = 'http://127.0.0.1:8000/api'

 class Request{
    constructor(url,baseURL){
        this.url =url;
        this.baseURL=baseURL || base;
        this.Request=axios.create({baseURL: this.baseURL});
    }
    get(){
        return this.Request({url: this.url , method:'get'});
    }
    getOne(id){
        return this.Request({url: this.url + '/' + id , method: 'get' });
    }

    post(value){
        return this.Request({url: this.url, data:value , method:'post' });
    }
    put(value, id){
        return this.Request({url: this.url + '/' + id, data:value , method: 'put'});
    }
    Delete(id){
        return this.Request({url: this.url + '/' + id , method:'delete' });
    }
 }

 export default Request;