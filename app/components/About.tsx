import Link from "next/link"

export default function About() {
    return (
        <section data-aos="fade-up">
            <p className="text-5xl">Nice to meet you, I'm Gavin.</p>
            <p className="my-5">I'm a second year Computer Science student at the University of Waterloo. I enjoy applying modern technologies to solve complex problems. Skilled at full-stack development. Learning more about the cloud and machine learning.</p>
            <p className="my-5">I'm currently seeking Winter 2025 opportunies! Check out my resume <Link href="/resume_2a.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">here</Link>.</p>
            <p className="my-5">When I am not busy stuggling with cs assignments, you can find me sleeping, playing badminton, or exploring new places.</p>
        </section>
    )
}