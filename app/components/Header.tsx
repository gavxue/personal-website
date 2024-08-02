import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col text-center my-60">
            {/* <h1 className="text-8xl">Gavin Xue</h1> */}
            <Link href="" className="name hvr-icon-bob hvr-icon">
                <lottie-player src="/name.json" autoplay></lottie-player>
            </Link>
            <div className="h-10 mt-10 flex justify-center gap-10 text-3xl">
                <div className="h-10 flex gap-20">
                    <Link href="mailto:gavinxue050705@gmail.com" className="w-full h-full icon-bounce" target="_blank" rel="noopener noreferrer">
                        <lottie-player src="/mail-icon.json" autoplay></lottie-player>
                    </Link>
                    <Link href="https://www.linkedin.com/in/gavin-xue/" className="w-full h-full icon-bounce" target="_blank" rel="noopener noreferrer">
                        <lottie-player src="/linkedin-icon.json" autoplay></lottie-player>
                    </Link>
                    <Link href="https://github.com/gavxue" className="w-full h-full icon-bounce" target="_blank" rel="noopener noreferrer">
                        <lottie-player src="/github-icon.json" autoplay></lottie-player>
                    </Link>
                </div>
            </div>
        </header >
    )
}