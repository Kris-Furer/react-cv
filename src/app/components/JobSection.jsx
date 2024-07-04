import Job from './Job';
import jobsData from '../jobsData'; 

const JobSection = () => (
  <div>
    {jobsData.map((job, index) => (
      <Job
        key={index} // Use a unique key for each Job component
        title={job.title}
        company={job.company}
        period={job.period}
        responsibilities={job.responsibilities}
      />
    ))}
  </div>
);

export default JobSection;
