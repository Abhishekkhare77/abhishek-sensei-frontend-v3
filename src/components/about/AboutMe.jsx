import Link from "next/link";
import React from "react";
export function AboutMe({ }) {
    return <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Hello, my name is Abhishek Khare. I am a software developer engineer at Catax - Simple Crypto Taxes and a graduate in B.Tech computer science from Bhilai Institute of Technology in Raipur. With expertise in FastAPI, Next.js, MongoDB, and TypeScript, I am passionate about developing dynamic and user-friendly websites.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    My love for chess and the Rubik&apos;s cube has honed my problem-solving skills, allowing me to think outside the box. I am always eager to take on new projects and collaborate to create innovative solutions. Let&apos;s work together to create amazing things!
                </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" prefetch={false}>
                    Download CV
                </Link>
                <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" prefetch={false}>
                    Hire Me
                </Link>
            </div>
        </div>
    </section>;
}
