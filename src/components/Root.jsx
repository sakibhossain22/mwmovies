import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Root = () => {
    const [adActive, setAdActive] = useState(false);

    useEffect(() => {
        const handleClick = () => {
            if (adActive) {
                const adUrl = 'https://www.cpmrevenuegate.com/qmx18gnaf?key=e7893f354193f76049593b3f2eac7c52';
                window.open(adUrl, '_blank');
                setAdActive(false);
            }
        };

        // Add event listener when adActive is true
        if (adActive) {
            document.addEventListener('click', handleClick);
        }

        // Set a timeout to reactivate the ad
        const adTimeout = setTimeout(() => {
            setAdActive(true);
        }, 10000);

        // Clean up: remove event listener and clear timeout
        return () => {
            document.removeEventListener('click', handleClick);
            clearTimeout(adTimeout);
        };
    }, [adActive]);
    return (
        <div>
            <Navbar />
            <div className="mx-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
