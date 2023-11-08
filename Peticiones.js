import axios from "axios";

const base = 'http://localhost/api'

 class Request{
    constructor(url,baseURL){
        this.url =url;
        this.baseURL=baseURL || base;
        this.Request=axios.create({baseURL: this.baseURL});
    }
    get(){
        return this.Request({url: this.url });
    }
    getOne(id){
        return this.Request({url: this.url + '/' + id  });
    }

    post(value){
        return this.Request({url: this.url, data:value , 'post' });
    }
    put(value, id){
        return this.Request({url: this.url + '/' + id, data:value , method: 'put'});
    }
    Delete(id){
        return this.Request({url: this.url + '/' + id , method:'delete' });
    }
 }

 export default Request;