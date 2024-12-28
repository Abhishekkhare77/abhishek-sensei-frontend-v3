import React from "react";
export function Skills({ }) {
    return <section className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-md">
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
    </section>;
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
