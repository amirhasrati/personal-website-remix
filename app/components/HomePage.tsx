import GithubIcon from "~/components/icons/GithubIcon";
import LinkedinIcon from "~/components/icons/LinkedinIcon";
import MailIcon from "~/components/icons/MailIcon";
import Featured from "~/components/Featured";

export default function HomePage() {
    return (
        <div className="" style={{ minHeight: "calc(100vh - 3.5rem)" }}>
            <header className="flex flex-col flex-1 items-center">
                <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-tr from-sky-500 to-indigo-500 text-transparent bg-clip-text mx-2 p-2">
                    Amir Hasrati
                </h1>
                <p className="text-center text-gray-700 text-md sm:text-xl md:text-2xl lg:text-3xl p-2">
                    Computer Science Student
                </p>
                <div className="flex flex-row justify-center items-center gap-4 lg:hidden mx-8">
                    <a
                        className="flex gap-4 rounded-full bg-slate-100 p-3 sm:py-2 items-center hover:bg-slate-200 transition delay-75"
                        href="https://github.com/amirhasrati">
                        <GithubIcon size={28} />
                        <p className="text-xl hidden sm:inline-block">
                            {" "}
                            Github
                        </p>
                    </a>
                    <a
                        className="flex gap-4 rounded-full bg-slate-100 p-3 sm:py-2 items-center hover:bg-slate-200 transition delay-75"
                        href="https://linkedin.com/in/amirhasrati">
                        <LinkedinIcon size={28} />
                        <p className="text-xl hidden sm:inline-block">
                            LinkedIn
                        </p>
                    </a>
                    <a
                        className="flex gap-4 rounded-full bg-slate-100 p-3 sm:py-2 items-center hover:bg-slate-200 transition delay-75"
                        href="mailto:ahasrati@uoguelph.ca">
                        <MailIcon size={28} />
                        <p className="text-xl hidden sm:inline-block">
                            Connect
                        </p>
                    </a>
                </div>
            </header>
            <div className="mt-4 mx-4 flex justify-center">
                <Featured />
            </div>
        </div>
    );
}
