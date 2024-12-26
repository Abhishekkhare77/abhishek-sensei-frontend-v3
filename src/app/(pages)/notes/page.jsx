import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <img
                                src="/placeholder.svg"
                                width="300"
                                height="400"
                                alt="Book Cover"
                                className="mx-auto rounded-xl shadow-lg"
                                style={{ aspectRatio: "300/400", objectFit: "cover" }}
                            />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Discover the Joy of Reading
                            </h1>
                            <p className="text-muted-foreground md:text-xl">
                                Immerse yourself in a world of literature with our intuitive PDF book reader. Enjoy offline access,
                                bookmarking, and seamless annotations.
                            </p>
                            <div className="flex gap-2">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Get Started
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Books</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Discover our curated selection of must-read PDF books across various genres.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="flex flex-col items-center space-y-2">
                                <img
                                    src="/placeholder.svg"
                                    width="200"
                                    height="300"
                                    alt="Book Cover"
                                    className="rounded-xl shadow-lg"
                                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                                />
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">The Great Gatsby</h3>
                                    <p className="text-muted-foreground">F. Scott Fitzgerald</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img
                                    src="/placeholder.svg"
                                    width="200"
                                    height="300"
                                    alt="Book Cover"
                                    className="rounded-xl shadow-lg"
                                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                                />
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">To Kill a Mockingbird</h3>
                                    <p className="text-muted-foreground">Harper Lee</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img
                                    src="/placeholder.svg"
                                    width="200"
                                    height="300"
                                    alt="Book Cover"
                                    className="rounded-xl shadow-lg"
                                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                                />
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">1984</h3>
                                    <p className="text-muted-foreground">George Orwell</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <img
                                    src="/placeholder.svg"
                                    width="200"
                                    height="300"
                                    alt="Book Cover"
                                    className="rounded-xl shadow-lg"
                                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                                />
                                <div className="text-center">
                                    <h3 className="text-lg font-bold">Pride and Prejudice</h3>
                                    <p className="text-muted-foreground">Jane Austen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </div>
    )
}
