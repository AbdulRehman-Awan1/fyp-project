import axios from "axios";

const instance=axios.create({baseURL:"http://localhost:5000",withCredentials:true})
export const postformdata =async(d)=>{
    try {
        return await instance.post("/",d)
    } catch (error) {
        console.log("Error post form data",error)
        
    }
}

export const getformdata =async()=>{
    try {
        return await instance.get("/booked-reservations")
    } catch (error) {
        console.log("Error getting form data",error)
        
    }
}

export const deleteformdata =async(id)=>{
    try {
        return await instance.delete(`/booked-reservations/${id}`)
    } catch (error) {
        console.log("Error deleting form data",error)
        
    }
}

export const getdeletedformdata =async()=>{
    try {
        return await instance.get("/deleted-reservations")
    } catch (error) {
        console.log("Error getting form data",error)
        
    }
}

export const approveformdata =async(id)=>{
    try {
        return await instance.post(`/booked-reservations`, {id:id})
    } catch (error) {
        console.log("Error deleting form data",error)
        
    }
}

export const getapprovedformdata =async()=>{
    try {
        return await instance.get("/approved-reservations")
    } catch (error) {
        console.log("Error getting form data",error)
        
    }
}