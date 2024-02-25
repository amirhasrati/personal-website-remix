/* eslint-disable react/no-unescaped-entities */
import TypeScriptIcon from "~/components/icons/TypeScriptIcon";
import JavaScriptIcon from "~/components/icons/JavaScriptIcon";
import PythonIcon from "~/components/icons/PythonIcon";
import JavaIcon from "~/components/icons/JavaIcon";
import CLangIcon from "~/components/icons/CLangIcon";
import HTMLIcon from "~/components/icons/HTMLIcon";
import ReactIcon from "~/components/icons/ReactIcon";
import MongoIcon from "~/components/icons/MongoIcon";
import CSSIcon from "~/components/icons/CSSIcon";
import NodeIcon from "~/components/icons/NodeIcon";
import ExpressIcon from "~/components/icons/ExpressIcon";
import GitIcon from "~/components/icons/GitIcon";
import DockerIcon from "~/components/icons/DockerIcon";
import TailwindIcon from "~/components/icons/TailwindIcon";
export default function AboutPage() {
    return (
        <div className="flex flex-col lg:h-screen lg:items-center lg:justify-center lg:h-[calc(100vh - 3.5rem)]">
            <header className="my-2">
                <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text ">
                    About Me
                </h1>
            </header>
            <main className="flex flex-col gap-8 px-4 md:px-0 lg:flex-row justify-center items-center w-full lg:h-3/4 ">
                <div className="px-6 lg:px-12 py-8 my-2 max-w-lg lg:w-1/2 lg:h-3/4 border border-gray-200 rounded-xl shadow-md">
                    <h2 className="mb-8 text-center font-medium text-3xl md:text-4xl">
                        Hi there! I'm{" "}
                        <span className="bg-gradient-to-tr from-sky-500 to-indigo-500 text-transparent bg-clip-text">
                            Amir
                        </span>{" "}
                        👋🏼
                    </h2>
                    <div className="text-md">
                        <p>
                            I'm a second-year computer science student at the
                            University of Guelph and an aspiring software
                            engineer.
                        </p>
                        <br />
                        <p>
                            I love to learn. Recently, I've been going down a
                            web development wormhole 🌀, learning many new
                            frameworks and technologies. You can follow my web
                            dev journey by checking out my projects section
                            below!
                        </p>
                        <br />
                        <p>
                            In my free time, I like to mix and master music (my
                            digital audio workstation of choice is FL Studio),
                            play video games 🎮, and go on nature walks 🌳
                        </p>
                    </div>
                </div>
                <div className="px-6 lg:px-12 py-8 mb-8 lg:mb-0 w-full max-w-lg lg:w-1/2 lg:h-3/4 border border-gray-200 rounded-xl shadow-md">
                    <h2 className="mb-8 text-center font-medium text-3xl md:text-4xl">
                        Technical{" "}
                        <span className="bg-gradient-to-tr from-sky-500 to-indigo-500 text-transparent bg-clip-text">
                            Skills
                        </span>{" "}
                        💻
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2 justify-center">
                            <TypeScriptIcon size={64} />
                            <JavaScriptIcon size={64} />
                            <PythonIcon size={64} />
                            <JavaIcon size={64} />
                            <CLangIcon size={64} />
                            <HTMLIcon size={64} />
                            <CSSIcon size={64} />
                        </div>
                        <div className="flex flex-row gap-2 justify-center">
                            <ReactIcon size={64} />
                            <TailwindIcon size={64} />
                            <MongoIcon size={64} />
                            <NodeIcon size={64} />
                            <ExpressIcon size={64} />
                            <GitIcon size={64} />
                            <DockerIcon size={64} />
                        </div>
                    </div>
                    <div className="mt-4 md:mt-8">
                        <p className="text-md">
                            These are some of the technologies I've used in my
                            university courses and personal projects, but the
                            skill I'm most proud of is my ability to research
                            solutions and learn quickly. It also helps that I'm
                            passionate about what I do 😁
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
