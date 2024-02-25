/* eslint-disable react/jsx-no-target-blank */
import todulo_app from "~/images/todulo-app.png";
import whack_a_cloud from "~/images/whack-a-cloud.png";

export default function ProjectsPage() {
    return (
        <div
            className="flex flex-col lg:h-screen lg:items-center lg:justify-center"
            style={{ height: "calc(100vh - 3.5rem)" }}>
            <header className="flex justify-center">
                <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-teal-400 to-yellow-200 text-transparent bg-clip-text">
                    Projects
                </h1>
            </header>
            <main className="mt-4 lg:mt-16 flex flex-col gap-8 lg:flex-row lg:gap-16 justify-center items-center">
                <div className="flex flex-col items-center py-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="https://todulo.com" target="_blank">
                        <img
                            className="rounded-lg border hover:border-blue-500 hover:shadow-md"
                            src={todulo_app}
                            width={360}
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <a href="https://todulo.com" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Task Management Application
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700">
                            My first true full-stack project. Built with
                            MongoDB, Express.js, and React.js and deployed with
                            Fly.io.
                        </p>
                        <a
                            href="https://github.com/amirhasrati/todulo-app"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Github Page
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a
                        href="https://github.com/amirhasrati/whack-a-cloud"
                        target="_blank">
                        <img
                            className="rounded-lg border hover:border-blue-500 hover:shadow-md"
                            src={whack_a_cloud}
                            width={360}
                            height={360}
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <a
                            href="https://github.com/amirhasrati/whack-a-cloud"
                            target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Whack-A-Cloud
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700">
                            Inspired by the classic "Whack-A-Mole" game,
                            Whack-A-Cloud was made in Python's PyGame library.
                        </p>
                        <a
                            href="https://github.com/amirhasrati/whack-a-cloud"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Github Page
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
