import axios from "axios"


const commonApi = async (httpMethod, URL, reqBody)=>{
    let reConfig = {
        method : httpMethod,
        url:URL,
        data: reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
}

export default commonApi;

