import { json } from "react-router-dom"


const getStoredJobApplication = ()=>{
    const stored = localStorage.getItem('job-application')
    if(stored){
        return JSON.parse(stored)
    }
    return []
}


const saveJobApplication = id =>{
     const store = getStoredJobApplication()
     const exists = store.find( jobid=> jobid === id)
     if(!exists){
        store.push(id)
        localStorage.setItem('job-application',JSON.stringify(store))
     }
}

export {saveJobApplication,getStoredJobApplication}