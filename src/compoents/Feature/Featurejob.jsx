import { useEffect, useState } from "react";
import Ajob from "../ajob/Ajob";


const Featurejob = () => {

    const [jobss, setJobss] = useState([]);

    // this is not the best way to load show all data
    
    const [datalength, setDatalength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobss(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-6xl">Featued jobs:{jobss.length}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobss.slice(0,datalength).map(job => <Ajob job={job}></Ajob>)
                }
            </div>
            <div className={datalength === jobss.length && 'hidden' }>
            <button onClick={()=>setDatalength(jobss.length)} className="btn btn-primary">Show All jobs</button>
        </div>
        </div>
        
    );
};

export default Featurejob;