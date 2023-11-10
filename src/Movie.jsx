/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Movie = ({ movie }) => {
    const { name, banner, date } = movie
    const nameSlice = name.slice(0, 17) + '...'
    console.log(nameSlice);
    return (
        <div>
            <NavLink>
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