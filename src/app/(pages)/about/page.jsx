import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Crafting Exceptional Digital Experiences
                                </h1>
                                <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                                    I am a software engineer/designer passionate about creating visually stunning and highly functional
                                    digital products. Let me help you bring your ideas to life.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    View Work
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="550"
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        />
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container">
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">Work Experience</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <h3 className="mb-2 text-xl font-semibold">Software Engineer</h3>
                            <p className="mb-2 text-muted-foreground">Acme Inc.</p>
                            <p className="mb-4 text-sm text-muted-foreground">June 2020 - Present</p>
                            <div className="prose text-muted-foreground">
                                <ul>
                                    <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                                    <li>Collaborated with cross-functional teams to design and implement new features.</li>
                                    <li>Participated in code reviews and pair programming to ensure code quality.</li>
                                    <li>Implemented automated testing and continuous integration/deployment workflows.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <h3 className="mb-2 text-xl font-semibold">Intern, Web Development</h3>
                            <p className="mb-2 text-muted-foreground">Globex Corporation</p>
                            <p className="mb-4 text-sm text-muted-foreground">May 2019 - August 2019</p>
                            <div className="prose text-muted-foreground">
                                <ul>
                                    <li>Assisted in the development and maintenance of the company&apos;s website.</li>
                                    <li>Learned and applied modern web development technologies and best practices.</li>
                                    <li>Participated in daily stand-up meetings and sprint planning sessions.</li>
                                    <li>Gained experience in project management and client communication.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <h3 className="mb-2 text-xl font-semibold">Front-End Developer</h3>
                            <p className="mb-2 text-muted-foreground">Stark Industries</p>
                            <p className="mb-4 text-sm text-muted-foreground">September 2017 - May 2020</p>
                            <div className="prose text-muted-foreground">
                                <ul>
                                    <li>Developed and maintained responsive user interfaces using HTML, CSS, and JavaScript.</li>
                                    <li>Collaborated with designers and back-end developers to ensure seamless integration.</li>
                                    <li>Implemented accessibility best practices and optimized for performance.</li>
                                    <li>Participated in agile development processes and code reviews.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container grid max-w-5xl items-center justify-center mx-auto gap-4 px-4 text-center md:gap-8 md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some of the technologies I&apos;m proficient in.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <HashIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">HTML</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <CodepenIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">CSS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <CodepenIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <CodepenIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">React</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <ViewIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Vue.js</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <NetworkIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Node.js</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <WindIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <GitGraphIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Git</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <FigmaIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Figma</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <CloudIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">AWS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <BellIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Vercel</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-background rounded-full p-3 flex items-center justify-center">
                                <TypeIcon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">TypeScript</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Take a look at some of my recent work and the impact it has had.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="310"
                            alt="Project 1"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Project 1</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    A responsive and visually stunning e-commerce website that increased conversions by 25%.
                                </p>
                            </div>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="310"
                            alt="Project 2"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Project 2</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    A modern and intuitive dashboard that streamlined the client&apos;s reporting process.
                                </p>
                            </div>
                            <Link
                                href="#"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I am a passionate software engineer/designer with a strong focus on creating visually stunning and highly
                            functional digital products. With years of experience, I have honed my skills in various technologies and
                            design principles to deliver exceptional results for my clients.
                        </p>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            My approach is centered on understanding the unique needs of each project and collaborating closely with
                            clients to bring their visions to life. I am committed to staying up-to-date with the latest industry
                            trends and best practices, ensuring that my work is cutting-edge and innovative.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            prefetch={false}
                        >
                            Download CV
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            prefetch={false}
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

function BellIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function CloudIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function CodepenIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" x2="12" y1="22" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="2 15.5 12 8.5 22 15.5" />
            <line x1="12" x2="12" y1="2" y2="8.5" />
        </svg>
    )
}


function FigmaIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
    )
}


function GitGraphIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="5" cy="6" r="3" />
            <path d="M5 9v6" />
            <circle cx="5" cy="18" r="3" />
            <path d="M12 3v18" />
            <circle cx="19" cy="6" r="3" />
            <path d="M16 15.7A9 9 0 0 0 19 9" />
        </svg>
    )
}


function HashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="9" y2="9" />
            <line x1="4" x2="20" y1="15" y2="15" />
            <line x1="10" x2="8" y1="3" y2="21" />
            <line x1="16" x2="14" y1="3" y2="21" />
        </svg>
    )
}


function NetworkIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
        </svg>
    )
}


function TypeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1="9" x2="15" y1="20" y2="20" />
            <line x1="12" x2="12" y1="4" y2="20" />
        </svg>
    )
}


function ViewIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
        </svg>
    )
}


function WindIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
    )
}