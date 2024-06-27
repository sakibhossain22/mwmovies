import { useEffect, useState } from "react";
import LatestUpdate from "../../LatestUpdate";
import { useLoaderData } from "react-router-dom";
const Search = () => {
    const location = useLoaderData()
    console.log(location);
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
            <div className="col-span-8">
                <h1 className="border-l-2 mb-4 px-2 border-red-600 text-xl">Search : </h1>

                <div>
                    
                </div>
            </div>
            <div className="col-span-4">
                {/* <div className="">
                    <h1 className="border-l-2 px-2 border-red-600 text-xl">Latest Update</h1>
                    {
                        movies.slice(0, 5).map(movie => <LatestUpdate key={movie._id} movie={movie}></LatestUpdate>)
                    }
                </div> */}
            </div>
        </div>
    );
};

export default Search;