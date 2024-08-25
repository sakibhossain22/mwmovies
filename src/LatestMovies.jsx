import { useEffect, useState } from "react";
import Movie from "./Movie";
import LatestUpdate from "./LatestUpdate";
const LatestMovies = () => {
    const [movies, setMovies] = useState([])



    useEffect(() => {
        fetch(`https://user-management-server-ten.vercel.app/movies`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    if(!movies) return <div className="flex items-center justify-center h-screen"><span className="loading loading-dots loading-lg"></span>
    </div>;
    return (
        <div className="lg:grid grid-cols-12 gap-14">
            <div className="col-span-9">
                <h1 className="border-l-2 mb-4 px-2 border-red-600 text-xl">Latest Movies</h1>

                <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 gap-5">

                    {
                        movies.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
                    }
                </div>
            </div>
            <div className="col-span-3">
                <div className="">
                    <h1 className="border-l-2 px-2 border-red-600 text-xl">Latest Update</h1>
                    {
                        movies.slice(0, 5).map(movie => <LatestUpdate key={movie._id} movie={movie}></LatestUpdate>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestMovies;