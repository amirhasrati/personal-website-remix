/* eslint-disable react/jsx-no-target-blank */
import HomeIcon from "./icons/HomeIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0">
            <div className="h-14 px-2 flex sm:justify-evenly md:justify-start items-center">
                {/* Home Button (mobile) */}
                <div className="flex-1 sm:hidden">
                    <div className="p-2 m-2 inline-block rounded-lg  hover:bg-slate-100 transition delay-75">
                        <NavLink to="/">
                            <HomeIcon />
                        </NavLink>
                    </div>
                </div>

                {/* Desktop Buttons */}
                <div className="flex-1 flex flex-row justify-between items-center lg:justify-start gap-1 mx-4">
                    <div className="px-3 py-1 hidden sm:inline-block text-lg font-semibold rounded-full hover:bg-slate-200 transition delay-75">
                        <NavLink to="/">
                            <p className="text-slate-800">Home</p>
                        </NavLink>
                    </div>
                    {/* <div className="px-3 py-1 hidden sm:inline-block text-lg font-semibold rounded-full hover:bg-slate-200 transition delay-75">
                        <NavLink to="/">
                            <p className="text-slate-800">About</p>
                        </NavLink>
                    </div>
                    <div className="px-3 py-1 hidden sm:inline-block text-lg font-semibold rounded-full hover:bg-slate-200 transition delay-75">
                        <NavLink to="/">
                            <p className="text-slate-800">Projects</p>
                        </NavLink>
                    </div>
                    <div className="px-3 py-1 hidden sm:inline-block text-lg font-semibold rounded-full hover:bg-slate-200 transition delay-75">
                        <NavLink to="/">
                            <p className="text-slate-800">Contact</p>
                        </NavLink>
                    </div> */}
                </div>

                {/* Connect With Me */}
                <div className="p-2 mx-2 hidden lg:inline-block rounded-full hover:bg-slate-200 transition delay-75">
                    <a
                        href="https://github.com/amirhasrati"
                        target="_blank"
                        className="text-slate-800">
                        <GithubIcon size={24} />
                    </a>
                </div>
                <div className="p-2 mx-2 hidden lg:inline-block rounded-full hover:bg-slate-200 transition delay-75">
                    <a
                        className="text-slate-800"
                        href="https://linkedin.com/in/amirhasrati"
                        target="_blank">
                        <LinkedinIcon size={24} />
                    </a>
                </div>
                <div className=" p-2 ml-2 mr-5 hidden lg:inline-block rounded-full hover:bg-slate-200 transition delay-75">
                    <a
                        href="mailto:ahasrati@uoguelph.ca"
                        className="text-slate-800">
                        <MailIcon size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
