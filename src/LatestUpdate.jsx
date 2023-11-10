/* eslint-disable react/prop-types */

const LatestUpdate = ({ movie }) => {
    const { name, banner, date } = movie
    const nameSlice = name.slice(0, 25) + '...'
    return (
        <div>
            <div>
                <div className="flex gap-5  my-5 items-center justify-center">
                    <img className="w-24" src={banner} alt="" />
                    <h1>{nameSlice}</h1>
                </div>
            </div>
        </div>
    );
};

export default LatestUpdate;