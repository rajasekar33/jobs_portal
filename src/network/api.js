
import axios from "axios"

const baseUrl = "http://localhost:8080"

export const syncjobs = () =>{
    return new Promise((resolve, reject) => {
        axios.post(baseUrl + '/jobs/sync').then(res => {
            resolve(true)
        }).catch(err => {
            reject(false)
        })
    })
    
}

export const getjobs = (params) =>{
    let query = ""
    if(params){
        query = `?location=${params}`
    }
    return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/jobs/' + query).then(res => {
            resolve(res)
        }).catch(err => {
            reject(false)
        })
    })
    
}