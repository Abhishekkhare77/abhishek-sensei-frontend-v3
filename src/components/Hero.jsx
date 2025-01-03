import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import SparklesText from "./ui/sparkles-text";

export default function Hero() {
    return (
        <>
            {/* Hero */}
            <div>
                <div className="container py-24 lg:py-32">
                    {/* Announcement Banner */}
                    <div className="flex justify-center">
                        <a
                            className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
                            href="#"
                        >
                            Check out the latest video
                            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    {/* End Announcement Banner */}
                    {/* Title */}
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <SparklesText text="Learn To Code With Ease" className="text-4xl font-extrabold tracking-tight lg:text-5xl" />
                    </div>
                    {/* End Title */}
                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-base text-muted-foreground">
                            Whether you&apos;re a beginner or an experienced developer, we have a wide range of courses and resources to help
                            you learn new skills, advance your career, and achieve your goals.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-8 gap-3 flex justify-center">
                        <Button size={"lg"}>Free Courses</Button>
                        <Button size={"lg"} variant={"outline"}>
                            Explore Blogs
                        </Button>
                    </div>
                    {/* End Buttons */}
                    <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
                        <script
                            src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
                            user-profile="https://topmate.io/embed/profile/abhishek_khare77?theme=D5534D"
                            btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
                            embed-version="v1"
                            button-text="Let's Connect"
                            position-right="30px"
                            position-bottom="30px"
                            custom-padding="0px"
                            custom-font-size="16px"
                            custom-font-weight="500"
                            custom-width="200px"
                            async=""
                            defer=""
                        ></script>

                    </div>
                </div>
            </div>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Blog Posts</h2>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            View All
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="rounded-lg border bg-background shadow-sm">
                            <Link href="#" prefetch={false}>
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog Post Image"
                                    width={600}
                                    height={400}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </Link>
                            <div className="p-4">
                                <Link href="#" prefetch={false}>
                                    <h3 className="text-lg font-semibold">The Surprising Benefits of Mindfulness</h3>
                                </Link>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                    Discover how incorporating mindfulness into your daily routine can improve your mental and physical
                                    well-being. From reducing stress to boosting focus, this blog post explores the transformative power of
                                    mindfulness.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-background shadow-sm">
                            <Link href="#" prefetch={false}>
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog Post Image"
                                    width={600}
                                    height={400}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </Link>
                            <div className="p-4">
                                <Link href="#" prefetch={false}>
                                    <h3 className="text-lg font-semibold">Unlocking the Power of Productivity</h3>
                                </Link>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                    In this blog post, we dive into practical strategies and techniques to help you maximize your
                                    productivity and achieve your goals more efficiently. Discover how to optimize your workflow, eliminate
                                    distractions, and cultivate a focused mindset.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-background shadow-sm">
                            <Link href="#" prefetch={false}>
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog Post Image"
                                    width={600}
                                    height={400}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </Link>
                            <div className="p-4">
                                <Link href="#" prefetch={false}>
                                    <h3 className="text-lg font-semibold">The Art of Effective Communication</h3>
                                </Link>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                    Effective communication is the key to building strong relationships and achieving success in both
                                    personal and professional settings. This blog post explores proven strategies and techniques to enhance
                                    your communication skills, from active listening to clear and concise expression.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-background shadow-sm">
                            <Link href="#" prefetch={false}>
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog Post Image"
                                    width={600}
                                    height={400}
                                    className="h-48 w-full rounded-t-lg object-cover"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </Link>
                            <div className="p-4">
                                <Link href="#" prefetch={false}>
                                    <h3 className="text-lg font-semibold">Mastering the Art of Decision-Making</h3>
                                </Link>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                    Making informed and thoughtful decisions is a crucial skill for personal and professional growth. This
                                    blog post explores the decision-making process, offering practical tips and strategies to help you
                                    navigate complex situations and make confident choices that align with your goals and values.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero */}
        </>
    );
}

const backgroundSvg = (
    <svg
        className="absolute "
        xmlns="http://www.w3.org/2000/svg"
        width={192}
        height={192}
        viewBox="0 0 192 192"
    >
        <path
            fill="currentColor"
            d="M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z"
        />
    </svg>
);
