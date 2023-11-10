import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LatestUpdate from "./LatestUpdate";

const MovieDetails = () => {
    const [movies, setMovies] = useState([])
    const [single, setSingle] = useState([])
    const params = useParams()
    const { name, banner, date, uniqueName, description, ss1, ss2, ss3 } = single

    useEffect(() => {
        fetch(`https://user-management-server-ten.vercel.app/movies`)
            .then(res => res.json())
            .then(data => {
                const find = data.find(movie => movie.uniqueName == params.uniqueName)
                setSingle(find);
                setMovies(data)

            })
    }, [params.uniqueName])
    return (
        <div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-8">
                    <div>
                        
                    </div>
                </div>
                <div className="col-span-4">
                    {
                        movies.slice(0, 5).map(movie => <LatestUpdate key={movie._id} movie={movie}></LatestUpdate>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;