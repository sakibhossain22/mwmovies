/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Movie = ({ movie }) => {
    const { name, banner, date, uniqueName } = movie
    const nameSlice = name.slice(0, 17) + '...'
    console.log(nameSlice);
    return (
        <div>
            <NavLink to={`/movie/${uniqueName}`}>
                <div>
                    <img src={banner} alt="" />
                    <h1>{nameSlice}</h1>
                    <p>{date}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Movie;