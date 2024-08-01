export default function Header() {
    return (
        <header className="flex flex-col text-center my-60">
            <h1 className="text-8xl">Gavin Xue</h1>
            <div className="h-10 mt-10 flex justify-center gap-10 text-3xl">
                <div className="h-10 flex gap-10">
                    <lottie-player src="/mail-icon.json" autoplay className="lottie-player"></lottie-player>
                    <lottie-player src="/linkedin-icon.json" autoplay className="lottie-player"></lottie-player>
                    <lottie-player src="/github-icon.json" autoplay className="lottie-player"></lottie-player>
                </div>
            </div>
        </header >
    )
}