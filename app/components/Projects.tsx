import { FiSearch } from "react-icons/fi";
import { PiPlanetFill } from "react-icons/pi";
import { TbFaceId } from "react-icons/tb";

export default function Projects() {
    return (
        <section className="my-20">
            <h2 className="text-center text-4xl font-bold">Projects</h2>
            <div className="grid grid-cols-3 my-5">
                <div>
                    <FiSearch className="text-4xl" />
                    <p className="font-bold">Broken Link Checker</p>
                    <p className="italic">Flask, BeautifulSoup4, Heroku</p>
                    <p>A web-scraper that checks WCMS 3 sites for broken links.</p>
                </div>
                <div>
                    <PiPlanetFill className="text-4xl" />
                    <p className="font-bold">Red Snap</p>
                    <p className="italic">React, NASA Open API</p>
                    <p>View images taken by NASA Mars rovers.</p>
                </div>
                <div>
                    <TbFaceId className="text-4xl" />
                    <p className="font-bold">Face Detection</p>
                    <p className="italic">Python, TensorFlow, OpenCV</p>
                    <p>Detects human faces from a laptop camera.</p>
                </div>
            </div>
        </section>
    )
}