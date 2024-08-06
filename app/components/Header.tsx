"use client";

import Link from "next/link";
import Lottie from "react-lottie-player";

import name from "/public/name.json";
import mailIcon from "/public/mail-icon.json";
import linkedinIcon from "/public/linkedin-icon.json";
import githubIcon from "/public/github-icon.json";

export default function Header() {
  return (
    <header className="flex flex-col text-center h-dvh justify-center">
      <Link href="" className="name hvr-icon-bob hvr-icon">
        <Lottie animationData={name} play loop={false} />
      </Link>
      <div className="h-7 lg:h-10 mt-10 flex justify-center gap-10">
        <div className="flex gap-20">
          <Link
            href="mailto:gavinxue050705@gmail.com"
            className="w-full h-full icon-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie
              animationData={mailIcon}
              play
              loop={false}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gavin-xue/"
            className="w-full h-full icon-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie
              animationData={linkedinIcon}
              play
              loop={false}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
          <Link
            href="https://github.com/gavxue"
            className="w-full h-full icon-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lottie
              animationData={githubIcon}
              play
              loop={false}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
