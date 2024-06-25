/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Movie = ({ movie }) => {
    const [uniqueName, setUniqueName] = useState();
    const [nameTitle, setNameTitle] = useState();

    useEffect(() => {
        const determineMovieDetails = () => {
            try {
                const movieProperties = [
                    { key: 'hollywoodMovieName', titleKey: 'hollywoodMovieName' },
                    { key: 'banglaSeriesName', titleKey: 'banglaSeriesName' },
                    { key: 'banglaName', titleKey: 'banglaName' },
                    { key: 'hindiSeriesName', titleKey: 'hindiSeriesName' },
                    { key: 'bollywoodMovieName', titleKey: 'bollywoodMovieName' },
                    { key: 'englishSeriesName', titleKey: 'englishSeriesName' },
                    { key: 'animeName', titleKey: 'animeName' },
                    { key: 'animeSeriesName', titleKey: 'animeSeriesName' }
                ];

                const foundProperty = movieProperties.find(prop => movie[prop.key]);
                if (foundProperty) {
                    const movieNameParts = movie[foundProperty.key].split(' ');
                    const hyphenatedName = movieNameParts.join('-');
                    setUniqueName(hyphenatedName);
                    setNameTitle(movie[foundProperty.titleKey]);
                }
            } catch (error) {
                console.error('Error determining movie details:', error);
            }
        };

        determineMovieDetails();
    }, [movie]);

    return (
        <div>
            <NavLink to={`/movie/${uniqueName}`}>
                <div>
                    <img src={movie?.photo} alt="" />
                    <h1 className="mt-2 text-sm text-white text-center">{nameTitle?.slice(0, 19) + '...'}</h1>
                    {/* You can add additional information about the movie here */}
                </div>
            </NavLink>
        </div>
    );
};

export default Movie;
