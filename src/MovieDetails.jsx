import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LatestUpdate from "./LatestUpdate";

const MovieDetails = () => {
    const [single, setSingle] = useState(null);
    const [all, setAll] = useState([]);
    const { uniqueName } = useParams();
    const originalName = uniqueName?.split('-').join(' ');
    console.log(single);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://user-management-server-ten.vercel.app/movies');
                const allMovies = await response.json();
                setAll(allMovies);

                // List of possible movie name keys
                const movieNameKeys = [
                    'hollywoodMovieName',
                    'banglaSeriesName',
                    'banglaName',
                    'hindiSeriesName',
                    'bollywoodMovieName',
                    'englishSeriesName',
                    'animeName',
                    'animeSeriesName'
                ];

                // Find the movie with the matching name in any of the name keys
                const film = allMovies.find(movie =>
                    movieNameKeys.some(key => movie[key] === originalName)
                );

                if (film) {
                    const movieNameKey = movieNameKeys.find(key => film[key] === originalName);
                    const updatedFilm = {
                        ...film,
                        movieName: film[movieNameKey]
                    };
                    setSingle(updatedFilm);
                }

            } catch (error) {
                console.error('Movie not found', error);
            }
        };

        fetchMovies();
    }, [originalName]);

    if (!single) return <div className="flex items-center justify-center h-screen"><span className="loading loading-dots loading-lg"></span>
    </div>;

    return (
        <div>
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-9">
                    <div>
                        <div className="flex gap-4">
                            <div>
                                <img className="w-40" src={single?.photo} alt={single?.movieName || 'Movie'} />
                            </div>
                            <div className="">
                                <h1 className="text-3xl font-bold text-white">{single?.movieName}</h1>
                                <span className="">Release : {single?.releaseDate}</span>
                                <p>{single?.description?.slice(0, 45)}</p>
                                <p>{single?.language}</p>
                                <div className="flex gap-3">
                                    <p>{single?.quality}</p>
                                    <p>{single?.genre}</p>
                                    <p>{single?.resolution}</p>
                                </div>
                                <div>
                                    <p> IMDb : {single?.IMDb}</p>
                                    <p> Duration : {single?.duration}</p>
                                    <p> Size : {single?.size}</p>
                                    {
                                        single?.ep ? <span>Episode : {single?.totalEpisode}</span> : ''
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3" />
                        {/* Trailer */}
                        <div className="my-4">
                            <h1 className="border-l-2 px-2 border-red-600 text-xl">Trailer</h1>
                            <iframe className="lg:w-1/2 w-full h-60 my-4" src={single?.trailer} ></iframe>
                        </div>
                        {/* Description and download */}
                        <div>
                        <h1 className="border-l-2 px-2 border-red-600 text-xl my-4">Description</h1>
                            <p>{single?.description}</p>
                            <div className="my-5">
                                {
                                    single?.subtitle ? <Link className="bg-red-600 text-white px-4 text-sm py-3">Download Subtitle</Link> : ''
                                }
                            </div>
                            <hr className="my-2" />
                            <h1 className="border-l-2 px-2 border-red-600 font-bold text-xl">Download</h1>
                            {/* Download */}
                            <div className="mb-10">
                                <div>

                                    <div className="overflow-x-auto">
                                        <table className="table table-zebra">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th>Download</th>
                                                    <th>Language</th>
                                                    <th>Quality</th>
                                                    <th>Size</th>
                                                </tr>
                                            </thead>
                                            <tbody className="lg:text-base md:text-base text-sm" >
                                                {
                                                    single?.ep ? single?.ep?.filter(episode => episode.length > 2).map((episode, idx) => {
                                                        return (
                                                            <tr key={idx}>
                                                                <td>
                                                                    <Link to={episode} className="bg-red-600 text-white px-4 py-2 rounded">Download</Link>
                                                                </td>
                                                                <td>{single?.language}</td>
                                                                <td>{single?.quality}</td>
                                                                <td>{single?.size}</td>
                                                            </tr>
                                                        );
                                                    })
                                                        : ''

                                                }
                                                {
                                                    single?.hollywoodLink && (
                                                        <tr>
                                                            <td>
                                                                <Link to={single.hollywoodLink} className="bg-red-600 text-white px-4 py-2 rounded">Download</Link>
                                                            </td>
                                                            <td>{single?.language}</td>
                                                            <td>{single?.quality}</td>
                                                            <td>{single?.size}</td>
                                                        </tr>
                                                    )
                                                }
                                                {
                                                    single?.banglaLink && (
                                                        <tr>
                                                            <td>
                                                                <Link to={single.banglaLink} className="bg-red-600 text-white px-4 py-2 rounded">Download</Link>
                                                            </td>
                                                            <td>{single?.language}</td>
                                                            <td>{single?.quality}</td>
                                                            <td>{single?.size}</td>
                                                        </tr>
                                                    )
                                                }
                                                {
                                                    single?.bollywoodLink && (
                                                        <tr>
                                                            <td>
                                                                <Link to={single.bollywoodLink} className="bg-red-600 text-white px-4 py-2 rounded">Download</Link>
                                                            </td>
                                                            <td>{single?.language}</td>
                                                            <td>{single?.quality}</td>
                                                            <td>{single?.size}</td>
                                                        </tr>
                                                    )
                                                }
                                                {
                                                    single?.animeLink && (
                                                        <tr>
                                                            <td>
                                                                <Link to={single.animeLink} className="bg-red-600 text-white px-4 py-2 rounded">Download</Link>
                                                            </td>
                                                            <td>{single?.language}</td>
                                                            <td>{single?.quality}</td>
                                                            <td>{single?.size}</td>
                                                        </tr>
                                                    )
                                                }
                                                {
                                                    single?.bollywoodMovieName && (
                                                        <tr>
                                                            <td>
                                                                <Link to={single.bollywoodMovieName} className="bg-red-600 text-white px-4 py-2 rounded">Download</Link>
                                                            </td>
                                                            <td>{single?.language}</td>
                                                            <td>{single?.quality}</td>
                                                            <td>{single?.size}</td>
                                                        </tr>
                                                    )
                                                }

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    {/* Replace the following line with your component to display the latest updates */}
                    <h1 className="border-l-2 px-2 border-red-600 text-xl">Latest Update</h1>
                    {all.slice(0, 5).map(movie => <LatestUpdate key={movie?._id} movie={movie}></LatestUpdate>)}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
