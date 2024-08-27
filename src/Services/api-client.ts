import axios from "axios";

export default axios.create({
    
    baseURL:'https://api.rawg.io/api',
    
    params :{
        key:'424fa2f2268e4ba2b0c53a919bba2747'
    }
})