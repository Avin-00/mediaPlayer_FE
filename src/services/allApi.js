import serverUrl from "./serverUrl"
import commonApi from "./commonApi"
// import { data } from "react-router-dom"
 
// API call for upload video
 
const uploadVideo = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
export default uploadVideo

// get all videos api call

export const getAllVideos = async ()=>{
    return await commonApi('GET', `${serverUrl}/videos`,"")
}



//! delete video

export const deleteVideo =  async (id)=>{
return await commonApi('DELETE',`${serverUrl}/videos/${id}`,"")
}

//ADD TO HISTORY

export const addToHistory = async (data)=>{
    return await commonApi('POST', `${serverUrl}/history`, data)
}

// GET HISTORY

export const getHistory = async()=>{
    return await commonApi('GET', `${serverUrl}/history`, "")
}

// delete History 

export const deleteWatchHistory = async (id)=>{
    return await commonApi('DELETE', `${serverUrl}/history/${id}`,{})
}

//add category

export const addCategory = async (data)=>{
    return await commonApi('POST', `${serverUrl}/categories`,data)
}

// get all category

export const getAllCategory = async ()=>{
    return await commonApi('GET', `${serverUrl}/categories`,"")
}

//delete category
export const deleteVideoCategory = async(data)=>{
    return await commonApi('DELETE', `${serverUrl}/categories/${data}`, {})
}