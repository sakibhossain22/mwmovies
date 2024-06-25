/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import star from '../src/assets/star.png'
import { useEffect, useState } from "react";
const LatestUpdate = ({ movie }) => {
    const [uniqueName, setUniqueName] = useState()

    useEffect(() => {
        const movieName = () => {
            try {
                if (movie.hollywoodMovieName) {
                    const movieNameParts = movie.hollywoodMovieName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)

                }
                if (movie.banglaSeriesName) {
                    const movieNameParts = movie.banglaSeriesName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
                if (movie?.banglaName) {
                    const movieNameParts = movie.banglaName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
                if (movie?.hindiSeriesName) {
                    const movieNameParts = movie.hindiSeriesName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
                if (movie?.bollywoodMovieName) {
                    const movieNameParts = movie.bollywoodMovieName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
                if (movie?.englishSeriesName) {
                    const movieNameParts = movie.englishSeriesName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
                if (movie?.animeName) {
                    const movieNameParts = movie.animeName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
                if (movie?.animeSeriesName) {
                    const movieNameParts = movie.animeSeriesName?.split(' ');
                    const hyphenatedName = movieNameParts?.join('-');
                    setUniqueName(hyphenatedName)
                }
            } catch (error) {
                console.error('Movie not found');
            }
        };

        movieName();
    }, [movie]);
    return (
        <div>
            <NavLink to={`/movie/${uniqueName}`}>
                <div>
                    <div className="flex gap-5 my-5 items-center justify-center">
                        <img className="w-24" src={movie?.photo} alt="" />
                        <div className="flex-1">
                            <h1>{movie?.hollywoodMovieName?.slice(0, 19) + '...'}</h1>
                            <div className="flex items-center gap-2">
                                <img className="w-3" src={star} alt="rating" />
                                <span className="text-sm">{movie?.IMDb}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default LatestUpdate;