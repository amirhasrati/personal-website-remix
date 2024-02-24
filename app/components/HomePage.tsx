import GithubIcon from "~/components/icons/GithubIcon";
import LinkedinIcon from "~/components/icons/LinkedinIcon";
import MailIcon from "~/components/icons/MailIcon";
import Featured from "~/components/Featured";

export default function HomePage() {
    return (
        <div className="" style={{ minHeight: "calc(100vh - 5rem)" }}>
            <header className="flex flex-col flex-1 items-center">
                <h1 className="mt-12 text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold bg-gradient-to-tr from-sky-500 to-indigo-500 text-transparent bg-clip-text mx-2 p-2">
                    Amir Hasrati
                </h1>
                <p className="text-center text-slate-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl p-2">
                    Computer Science Student
                </p>
                <div className="flex flex-row justify-center items-center gap-4 lg:hidden m-8">
                    <a
                        className="flex gap-4 rounded-full bg-slate-100 py-2 px-6 items-center hover:bg-slate-200 transition delay-75"
                        href="https://github.com/amirhasrati">
                        <GithubIcon size={24} />
                        <p className="text-xl hidden sm:inline-block">
                            {" "}
                            Github
                        </p>
                    </a>
                    <a
                        className="flex gap-4 rounded-full bg-slate-100 py-2 px-6 items-center hover:bg-slate-200 transition delay-75"
                        href="https://linkedin.com/in/amirhasrati">
                        <LinkedinIcon size={24} />
                        <p className="text-xl hidden sm:inline-block">
                            LinkedIn
                        </p>
                    </a>
                    <a
                        className="flex gap-4 rounded-full bg-slate-100 py-2 px-6 items-center hover:bg-slate-200 transition delay-75"
                        href="mailto:ahasrati@uoguelph.ca">
                        <MailIcon size={24} />
                        <p className="text-xl hidden sm:inline-block">
                            Connect
                        </p>
                    </a>
                </div>
            </header>
            <div className="mt-4">
                <Featured />
            </div>
        </div>
    );
}
