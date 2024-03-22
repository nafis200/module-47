const Ajob = ({ job }) => {
  const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-2">
            <button className="btn">{remote_or_onsite}</button>
            <button className="btn">{job_type}</button>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajob;
