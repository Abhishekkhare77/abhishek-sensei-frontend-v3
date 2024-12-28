import React from "react";
export function WorkExp() {
    return <section className="py-12 md:py-16 lg:py-20">
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
    </section>;
}
