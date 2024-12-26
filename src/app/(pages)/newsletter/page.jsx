"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

export default function Page() {
    return (
        <React.Fragment>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay up to date with our newsletters</h1>
                            <p className="max-w-prose text-gray-500 md:text-xl dark:text-gray-400">
                                Subscribe to our dedicated newsletter email and receive the latest updates, tutorials, and insights from
                                our web development community.
                            </p>
                            <form className="flex space-x-2">
                                <Input type="email" placeholder="Enter your email" className="max-w-sm flex-1" />
                                <Button type="submit">Subscribe</Button>
                            </form>
                            <div className="flex gap-2">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Explore Newsletters
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Subscribe
                                </Link>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="rounded-md overflow-hidden border">
                                <img
                                    src="/placeholder.svg"
                                    width="600"
                                    height="400"
                                    alt="Newsletter"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Discover our Newsletters</h2>
                            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Browse through our collection of newsletters covering a wide range of web development topics, from the
                                latest frameworks and tools to best practices and industry insights.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-md border bg-gray-100 p-4 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">Frontend Focus</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Stay up to date with the latest frontend technologies, frameworks, and best practices.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-4 inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Subscribe
                                </Link>
                            </div>
                            <div className="rounded-md border bg-gray-100 p-4 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">Backend Bulletin</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Dive into the latest server-side technologies, frameworks, and best practices.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-4 inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Subscribe
                                </Link>
                            </div>
                            <div className="rounded-md border bg-gray-100 p-4 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">Full Stack Fusion</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Explore the latest trends and best practices in full-stack web development.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-4 inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Subscribe
                                </Link>
                            </div>
                            <div className="rounded-md border bg-gray-100 p-4 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">DevOps Dispatch</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Stay informed about the latest DevOps tools, practices, and industry trends.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-4 inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    prefetch={false}
                                >
                                    Subscribe
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}