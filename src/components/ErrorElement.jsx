import { NavLink } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h1>404 ERROR</h1>
            <NavLink className='btn btn-ghost bg-red-700 text-white' to='/'>Go To Home</NavLink>
        </div>
    );
};

export default ErrorElement;