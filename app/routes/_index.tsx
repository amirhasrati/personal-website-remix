import AboutPage from "~/components/AboutPage";
import HomePage from "~/components/HomePage";
import Navbar from "~/components/Navbar";
import ProjectsPage from "~/components/ProjectsPage";

export default function Index() {
    return (
        <div>
            <Navbar />
            <HomePage />
            <div className="mt-16 lg:mt-0">
                <AboutPage />
            </div>
            <div className="mt-16 lg:mt-0">
                <ProjectsPage />
            </div>
        </div>
    );
}
