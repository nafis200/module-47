import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/Localstorage";

const Jobs = () => {
  const jok = useLoaderData();

  const [appliedJobss, setAppliedjobss] = useState([]);

  const [displayJobs,setDisplayJobs] = useState([]);

  const handleJob = filter =>{
     if(filter === 'all'){
        setDisplayJobs(appliedJobss);
     }
     else if(filter === 'remote'){
        const remoteJobs = appliedJobss.filter(job => job.remote_or_onsite === 'Remote')
        setDisplayJobs(remoteJobs)
     }
     else if(filter === 'onsite'){
         const onsiteJobs = appliedJobss.filter(job => job.remote_or_onsite === 'Onsite')
         setAppliedjobss(onsiteJobs);
     }
  }

  useEffect(() => {
    const storedJobsids = getStoredJobApplication();
    if (jok.length) {
      const appliedjobs = jok.filter((job) => storedJobsids.includes(job.id));
      console.log(appliedjobs);
      setAppliedjobss(appliedJobs);
      setDisplayJobs(appliedJobs)
    }
    // const jobApplied = []
    // for(const id of storedJobsids){
    //     const job = jok.find(job => job.id === id){
    //         if(job){
    //             jobApplied.push(job)
    //         }
    //     }
    // }
  }, []);

  return (
    <div>
      <h2>Jobs i applied: {appliedJobss.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>{
            handleJob('all')
          }}>
            <a>All</a>
          </li>
          <li onClick={()=>handleJob('remote')}>
            <a>Remote</a>
          </li>
          <li>
            <a>onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li>
            {" "}
            <span>{job.job_title}: {job.remote_or_onsite} </span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
