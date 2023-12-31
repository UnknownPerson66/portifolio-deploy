import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const NavButton = ({ url, label }) => {
        return (

            <a
                href={url}
                className="text-gray-300 transition-all hover:bg-[#5659FD] hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
                {label}
            </a>
        )
    }

    return (
        <nav className="bg-transparent backdrop-blur-sm fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#5659FD] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleNavbar}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center lg:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <h1> {'<'}<span className='text-base font-medium'>/EC</span>{'>'}</h1>
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavButton url="/#home" label={"Home"} />
                                <NavButton url="/#about" label={"About"} />
                                <NavButton url="/#projects" label={"Projects"} />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 text-center bg-[]">

                        <a
                            href="/#home"
                            className="text-gray-300 hover:bg-[#5659FD] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="/#about"
                            className="text-gray-300 hover:bg-[#5659FD] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </a>
                        <a
                            href="/#projects"
                            className="text-gray-300 hover:bg-[#5659FD] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
