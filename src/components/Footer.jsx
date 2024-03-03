import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" text-white border border-black/3 py-3 mt-11">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex justify-center ">
                    <div>
                        <span className="mr-4 text-black">© {new Date().getFullYear()} Dharam IN. All rights reserved.</span>
                        <Link to="https://github.com/Dharam-IN" className="text-blue-500 underline hover:text-blue-700">
                            Dharam
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
