/* eslint-disable react/jsx-no-target-blank */
import type { MetaFunction } from "@remix-run/node";
import HomePage from "~/components/HomePage";
import Navbar from "~/components/Navbar";

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

export const meta: MetaFunction = () => {
    return [
        { title: "Amir Hasrati" },
        { name: "description", content: "Welcome to my website!" },
    ];
};

export default function Index() {
    return (
        <div>
            <Navbar />
            <HomePage />

            <div
                className="h-screen flex flex-col items-center"
                style={{ height: "calc(100vh - 5rem)" }}>
                <header>
                    <h1 className="mt-16 text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text mx-2 p-2">
                        About Me
                    </h1>
                </header>
                <main className="px-4 mt-16 xl:mt-0 xl:h-full w-full flex flex-col xl:flex-row gap-8 xl:gap-8 2xl:gap-16 justify-center items-center">
                    <div className="h-3/4 w-full max-w-2xl bg-slate-100 rounded-xl shadow-xl py-8">
                        <h2 className="text-center text-3xl sm:text-5xl mx-2 mt-2 mb-4 p-2">
                            Hi there! I'm Amir 👋🏼
                        </h2>
                        <div className="text-lg sm:text-2xl mx-8 sm:mx-16 my-2 mb-8 xl:pb-16 xl:mb-16">
                            <p>
                                I'm a second-year computer science student at
                                the University of Guelph and an aspiring
                                software engineer.
                            </p>
                            <br />
                            <p>
                                I love to learn. Recently, I've been going down
                                a web development wormhole 🌀, learning many new
                                frameworks and technologies. You can follow my
                                web dev journey by checking out my projects
                                section below!
                            </p>
                            <br />
                            <p>
                                In my free time, I like to mix and master music
                                (my digital audio workstation of choice is FL
                                Studio), play video games (maybe a bit too much
                                at times 😅), and go on nature walks 🌳
                            </p>
                        </div>
                    </div>
                    <div className="h-3/4 w-full max-w-2xl bg-slate-100 rounded-xl shadow-xl py-8 mb-8 xl:mb-0">
                        <h2 className="text-center text-3xl sm:text-5xl mx-2 mt-2 mb-4 p-2">
                            Technical Skills 💻
                        </h2>
                        <div className="flex flex-col sm:gap-8 mx:4 mt:4 sm:mx-12 sm:mt-12 mb-8 p-4">
                            <div className="flex justify-evenly">
                                <TypeScriptIcon size={64} />
                                <JavaScriptIcon size={64} />
                                <PythonIcon size={64} />
                                <JavaIcon size={64} />
                                <CLangIcon size={64} />
                                <HTMLIcon size={64} />
                                <CSSIcon size={64} />
                            </div>
                            <div className="flex justify-evenly">
                                <ReactIcon size={64} />
                                <TailwindIcon size={64} />
                                <MongoIcon size={64} />
                                <NodeIcon size={64} />
                                <ExpressIcon size={64} />
                                <GitIcon size={64} />
                                <DockerIcon size={64} />
                            </div>
                        </div>
                        <div className="text-lg sm:text-2xl mx-8 sm:mx-12 my-4 sm:p-4">
                            <p>
                                These are some of the technologies I've used in
                                my university courses and personal projects, but
                                the skill I'm most proud of is the ability to
                                research solutions and learn quickly. It helps
                                that I'm passionate about what I do 😁
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
