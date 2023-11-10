import { useEffect, useState } from "react";
import Movie from "./Movie";

const LatestMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://user-management-server-ten.vercel.app/movies`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-8">
                <div className="grid grid-cols-5 gap-5">
                    {
                        movies.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
                    }
                </div>
            </div>
            <div className="col-span-4">
                <div className="">
                    {
                        movies.slice(0,5).map(movie => <Movie key={movie._id} movie={movie}></Movie>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestMovies;