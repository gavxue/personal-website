
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { PiPlanetFill } from "react-icons/pi";
import { TbFaceId } from "react-icons/tb";

export default function Projects() {
    return (
        <section className="my-20" data-aos="fade-up">
            <h2 className="text-center text-4xl font-bold">Projects</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 my-5 gap-5">
                <Link href="https://github.com/gavxue/broken-link-checker" className="hvr-grow" target="_blank" rel="noopener noreferrer">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <FiSearch className="text-4xl" />
                        <p className="font-bold">Broken Link Checker</p>
                        <p className="italic">Flask, BeautifulSoup4, Heroku</p>
                        <p>A web-scraper that checks WCMS 3 sites for broken links.</p>
                    </div>
                </Link>
                <Link href="https://github.com/gavxue/red-snap" className="hvr-grow" target="_blank" rel="noopener noreferrer">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <PiPlanetFill className="text-4xl" />
                        <p className="font-bold">Red Snap</p>
                        <p className="italic">React, NASA Open API</p>
                        <p>View images taken by NASA Mars rovers.</p>
                    </div>
                </Link>
                <Link href="https://github.com/gavxue/face-recognition" className="hvr-grow" target="_blank" rel="noopener noreferrer">
                    <div data-aos="fade-up" data-aos-delay="500">
                        <TbFaceId className="text-4xl" />
                        <p className="font-bold">Face Detection</p>
                        <p className="italic">Python, TensorFlow, OpenCV</p>
                        <p>Detects human faces from a laptop camera.</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}