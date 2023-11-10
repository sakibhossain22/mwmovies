/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const LatestUpdate = ({ movie }) => {
    const { name, banner, date, uniqueName } = movie
    const nameSlice = name.slice(0, 25) + '...'
    return (
        <div>
            <NavLink to={`/movie/${uniqueName}`}>
                <div>
                    <div className="flex gap-5  my-5 items-center justify-center">
                        <img className="w-24" src={banner} alt="" />
                        <h1>{nameSlice}</h1>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default LatestUpdate;