import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/Localstorage";

const Jobdetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams() 
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const handleapply = ()=>{
         saveJobApplication(idInt)
         toast('you have apply succesfully')
    }
    return (
        <div>
        <h2>Job Details of: {id}</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="border col-span-3">
                <h2 className="text-4xl">Details comming here</h2>
              </div>
              <div className="border">
                <h2 className="text-2xl">Side things</h2>
                <p>{job.company_name}</p>
                <button onClick={handleapply} className="btn btn-primary w-full">Apply Now</button>
              </div>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Jobdetails;