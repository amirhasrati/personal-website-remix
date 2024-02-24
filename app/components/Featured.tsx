/* eslint-disable react/jsx-no-target-blank */

import GithubIcon from "./icons/GithubIcon";
import todulo from "~/images/todulo_home_page.png";

export default function Featured() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="mx-2 md:px-4 lg:max-w-6xl bg-slate-100 rounded-xl shadow-xl">
                <h1 className="text-center text-slate-800 text-2xl md:text-4xl font-semibold mt-6 mb-2">
                    Featured
                </h1>
                <div className="flex items-center px-4 pb-4">
                    <div className="flex flex-col justify-center items-center my-1 w-full h-full xl:w-1/2">
                        <img
                            src={todulo}
                            alt="A screenshot of the Todulo home page."
                            width={600}
                            height={600}
                            className="rounded-xl"
                        />
                        <a
                            href="https://github.com/amirhasrati/todulo-app"
                            className="xl:hidden mt-4 text-white md:text-2xl bg-rose-500 px-2 py-2 rounded-full hover:bg-rose-600 transition delay-75">
                            <GithubIcon size={32} />
                        </a>
                    </div>
                    <div className="hidden xl:flex flex-col my-1 w-1/2 h-full ">
                        <div className="flex flex-col gap-2 px-12 py-4 items-center justify-center">
                            <h2 className="text-slate-800 font-semibold text-3xl pt-4">
                                Task Mangement App
                            </h2>
                            <a
                                className="border-2 p-2 rounded-full border-slate-100 hover:border-blue-600 hover:shadow-2xl hover:bg-white  transition delay-75"
                                href="https://github.com/amirhasrati/todulo-app"
                                target="_blank">
                                <GithubIcon size={32} />
                            </a>
                        </div>

                        <ul className="flex flex-col gap-6 px-12 mt-4 text-xl text-slate-700 pb-16">
                            <li>
                                Designed and implemented a full-stack
                                application with the MERN stack and deployed it
                                with{" "}
                                <span className="text-blue-700">fly.io</span>.
                            </li>
                            <li>
                                Familiarized myself with tools like{" "}
                                <span className="text-blue-700">React.js</span>{" "}
                                and
                                <span className="text-blue-700">
                                    {" "}
                                    Tailwind CSS{" "}
                                </span>
                                which I used to craft responsive and modular UI
                                components.
                            </li>
                            <li>
                                Used{" "}
                                <span className="text-blue-700">
                                    Express.js
                                </span>{" "}
                                to manage incoming user requests from the
                                front-end and store user data in an instance of{" "}
                                <span className="text-blue-700">MongoDB</span>.
                            </li>
                            <li>
                                Learned how to hash passwords with{" "}
                                <span className="text-blue-700">bcrypt</span>{" "}
                                and implement custom{" "}
                                <span className="text-blue-700">
                                    user authentication
                                </span>{" "}
                                middleware from with Express.js.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
