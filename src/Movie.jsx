/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import star from '../src/assets/star.png';

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
                <div className="relative">
                    <div className="relative">
                        <img className="lg:h-60 h-40 md:h-44 w-full" src={movie?.photo} alt="" />
                        <div className="absolute bottom-0 gap-1 right-1 flex items-center bg-black text-white px-2 text-sm">
                            <img className="w-3" src={star} alt="rating star" />
                            <span className="text-sm">{movie?.IMDb?.slice(0, 3)}</span>
                        </div>
                    </div>
                    <h1 className="mt-2 text-sm text-white text-center">{nameTitle?.slice(0, 19) + '...'}</h1>
                    <span className="absolute top-1 left-1 bg-red-600 text-white px-2 text-sm">{movie?.quality}</span>
                </div>
            </NavLink>
        </div>
    );
};

export default Movie;
