/* eslint-disable react/jsx-no-target-blank */

import GithubIcon from "./icons/GithubIcon";
import todulo from "~/images/todulo_home_page.png";

export default function Featured() {
    return (
        <div className="w-full max-w-lg lg:max-w-4xl px-4 py-4 flex flex-col gap-2 items-center border border-gray-200 rounded-xl shadow-md">
            <h1 className="my-2 text-center text-3xl text-blue-600 font-medium">
                Featured
            </h1>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <a href="https://todulo.com" target="_blank">
                        <img
                            src={todulo}
                            alt="A screenshot of the Todulo home page."
                            width={600}
                            height={600}
                            className="rounded-xl border border-gray-200 hover:shadow-md hover:border-blue-500 transition delay-75"
                        />
                    </a>
                    <a
                        href="https://github.com/amirhasrati/todulo-app"
                        className="lg:hidden bg-rose-500 text-white p-2 rounded-full mt-4 hover:bg-rose-600">
                        <GithubIcon size={28} />
                    </a>
                </div>

                <div className="hidden lg:flex flex-col items-center w-1/2 px-8">
                    <h2 className="mb-2 text-center text-2xl">
                        Task Management App
                    </h2>
                    <a
                        target="_blank"
                        className="border-2 border-gray-200 hover:border-blue-500 hover:shadow-md p-1 rounded-full transition delay-75"
                        href="https://github.com/amirhasrati/todulo-app">
                        <GithubIcon size={32} />
                    </a>

                    <ul className="mt-2 flex flex-col gap-4">
                        <li>
                            Designed and implemented a full-stack application
                            with the MERN stack and deployed it with{" "}
                            <span className="text-blue-700">fly.io</span>.
                        </li>
                        <li>
                            Familiarized myself with tools like{" "}
                            <span className="text-blue-700">React.js</span> and
                            <span className="text-blue-700">
                                {" "}
                                Tailwind CSS{" "}
                            </span>
                            which I used to craft responsive and modular UI
                            components.
                        </li>
                        <li>
                            Used{" "}
                            <span className="text-blue-700">Express.js</span> to
                            manage incoming user requests from the front-end and
                            store user data in an instance of{" "}
                            <span className="text-blue-700">MongoDB</span>.
                        </li>
                        <li>
                            Learned how to hash passwords with{" "}
                            <span className="text-blue-700">bcrypt</span> and
                            implement custom{" "}
                            <span className="text-blue-700">
                                user authentication
                            </span>{" "}
                            middleware from with Express.js.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
