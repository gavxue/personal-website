import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi"

export default function Header() {
    return (
        <header className="flex flex-col text-center my-60">
            <h1 className="text-7xl">Gavin Xue</h1>
            <div className="mt-10 flex justify-center gap-10 text-3xl">
                <lottie-player src="/mail-icon.json" autoplay className="lottie-player"></lottie-player>
                <FiMail />
                <FiLinkedin />
                <FiGithub />
            </div>
        </header>
    )
}