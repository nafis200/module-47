import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h2>opps!!!!</h2>
            <button className="btn"><Link to="/">Go back</Link></button>
        </div>
    );
};

export default Errorpage;

