/* eslint-disable react/prop-types */

const LatestUpdate = ({movie}) => {
    const {name, banner, date} = movie
    const nameSlice = name.slice(0,17) + '...'
    return (
        <div>
            <div>
                <img src={banner} alt="" />
                <h1>{nameSlice}</h1>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default LatestUpdate;